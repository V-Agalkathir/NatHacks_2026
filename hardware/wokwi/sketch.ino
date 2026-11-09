/*
  Purrcast scale node (ESP32 + 4 x HX711 load cells), live over Wi-Fi

  One ESP32 reads four weight scales: food bowl, water bowl, litter box and bed.
  Like real battery-saving scales, it only talks a lot when something happens:

    - Something is changing (cat at the bowl, in the litter box, on the bed):
      3 calm readings from just before, then one reading every second
    - Nothing happening: one "heartbeat" reading, which also proves the scale is alive

  Every reading goes two places:
    1. Serial Monitor, in the readings.csv format (docs/CONTRACT.md section 1)
    2. Live over Wi-Fi to an MQTT broker, topic purrcast/<PAIR_CODE>/readings,
       where the Purrcast app (on a laptop or phone) picks it up in real time.
       The latest reading per scale is also kept on purrcast/<PAIR_CODE>/last/<device>.

  AUTOPLAY plays a cat's routine on its own (drink, eat, litter box, nap, repeat)
  so the demo runs hands-free.

  The Wokwi sliders are "cat action" controls with realistic amounts
  (the bowl, box and bed weights are built in, so sliders start at 0):
    FOOD / WATER  slide UP = the cat eats / drinks (10 g per 1 kg of slider).
                  Sliding back down does nothing (you can't un-drink).
    LITTER        slide past 1 kg = the cat steps in; back below 1 kg = it steps out.
                  How high you slid = what it leaves behind (5 kg slider = 25 g, normal).
                  A small bump = a visit with almost nothing left: the blockage warning sign.
    BED           slide past 1 kg = the cat naps on the bed; back down = it gets up.
*/

#include <WiFi.h>
#include <PubSubClient.h>
#include <Wire.h>
#include <Adafruit_GFX.h>
#include <Adafruit_SSD1306.h>
#include <HX711.h>
#include <sys/time.h>
#include <time.h>

// ---------------- Settings ----------------
const char*    CAT_ID       = "luna";        // which cat profile these scales are paired to
const char*    PAIR_CODE    = "PURR-7F3A";   // typed into the app to connect; shown on the screen
const bool     AUTOPLAY     = true;          // play a scripted cat routine (sliders add on top)

// What the scales weigh with no cat activity: food bowl, water bowl, litter box, bed (grams)
const float    BASE_G[4]       = { 400, 900, 6000, 1500 };
const float    CAT_G           = 4210;       // the cat's weight
const float    BOWL_G_PER_KG   = 10;         // food/water slider: grams eaten per kg of slide
const float    LITTER_G_PER_KG = 5;          // litter slider: grams left behind per kg of slide
const float    CAT_ON_SLIDER_G = 1000;       // litter/bed slider above 1 kg = the cat is on it

const char*    WIFI_SSID    = "Wokwi-GUEST"; // Wokwi's virtual Wi-Fi (internet access, no password)
const char*    MQTT_HOST    = "broker.hivemq.com";   // free public broker (demo data only)
const uint16_t MQTT_PORT    = 1883;

const time_t   START_EPOCH  = 1794124800;    // fallback clock (2026-11-08 08:00 UTC) if internet time fails
const uint32_t BURST_MS     = 1000;          // reading interval while something is changing
const uint32_t HEARTBEAT_MS = 30UL * 1000;   // quiet check-in (demo: 30 s; real scales: 1 hour)
const uint32_t SETTLE_MS    = 2000;          // this long with no change = back to quiet
const float    CHANGE_G     = 3.0;           // a change this big (grams) means something is happening
const int      PRE_ROLL     = 3;             // calm readings sent from just BEFORE an activity
                                             // (sensors/ and the app use them as the "before" weight)

// Wokwi's load cells give 420 raw units per kg (0-2100 for 5 kg, 0-21000 for 50 kg),
// so 0.42 raw units = 1 gram. A real load cell needs its own calibration number.
const float RAW_PER_GRAM = 0.42;

// ---------------- Pins ----------------
const uint8_t LED_PIN = 23;   // blinks on every reading sent

struct Scale {
  const char* device;   // food / water / litter / bed (docs/CONTRACT.md)
  const char* label;    // shown on the screen
  uint8_t dtPin;
  uint8_t sckPin;
  HX711 hx;
  float grams;          // latest reading
  float prevGrams;      // reading before that
  bool busy;            // something is happening right now
  uint32_t lastChangeMs;
  uint32_t lastSentMs;
  // last few calm readings, once a second, so we can send what happened just before an activity
  float preGrams[PRE_ROLL];
  time_t preTime[PRE_ROLL];
  int preCount;
  uint32_t lastPreMs;
};

Scale scales[] = {
  { "food",   "Food",   4,  5  },
  { "water",  "Water",  18, 19 },
  { "litter", "Litter", 32, 33 },
  { "bed",    "Bed",    25, 26 },
};
const int SCALE_COUNT = sizeof(scales) / sizeof(scales[0]);

Adafruit_SSD1306 display(128, 64, &Wire, -1);
bool hasDisplay = false;
uint32_t lastDrawMs = 0;
uint32_t ledOffMs = 0;

WiFiClient net;
PubSubClient mqtt(net);
char topicReadings[64];
char topicStatus[64];
uint32_t lastMqttTryMs = 0;
bool mqttTried = false;
bool sendAllNow = false;   // just (re)connected: publish every scale's weight right away
char bootId[12];           // new on every restart; the app clears its live data when it changes

// ---------------- Autoplay: a cat's routine ----------------
// Every 200 s: drink (10-25 s), eat (35-55 s), litter box (65-125 s), nap (135-190 s).
// Bowls slowly empty and the litter box slowly fills, cycle after cycle.
const uint32_t CYCLE_S = 200;

float wobble(uint32_t ms, float size) { return ((ms / 400) % 2) ? size : -size; }

// Linear 0 -> 1 between a and b seconds
float ramp(float t, float a, float b) { return t <= a ? 0 : t >= b ? 1 : (t - a) / (b - a); }

// Change from the base weight caused by the scripted cat (grams)
float autoplayGrams(int i, uint32_t ms) {
  float t = (ms / 1000) % CYCLE_S;
  int n = (ms / 1000) / CYCLE_S;          // completed cycles
  switch (i) {
    case 0: {                              // food bowl: cat eats 9 g per cycle
      float g = -9 * (n % 20) - 9 * ramp(t, 35, 55);
      return (t >= 35 && t < 55) ? g + wobble(ms, 5) : g;
    }
    case 1: {                              // water bowl: cat drinks 12 ml per cycle
      float g = -12 * (n % 20) - 12 * ramp(t, 10, 25);
      return (t >= 10 && t < 25) ? g + wobble(ms, 5) : g;
    }
    case 2: {                              // litter box: cat visits, leaves 25 g
      float g = 25 * (n % 20);
      if (t >= 65 && t < 125) g += CAT_G + wobble(ms, 15);   // digs and shuffles the whole visit
      else if (t >= 125) g += 25;
      return g;
    }
    default: {                             // bed: cat naps on it
      float g = 0;
      if (t >= 135 && t < 190) {
        g += CAT_G;
        if (t < 138 || t >= 187) g += wobble(ms, 10);  // settling in / getting up
      }
      return g;
    }
  }
}

// ---------------- Sliders as cat actions ----------------
struct Action {
  float lastSlider;      // slider position last time (grams)
  float used;            // bowls: total eaten/drunk so far
  bool catOn;            // litter/bed: the cat is on it
  float peak;            // litter: highest slider position during this visit
  float left;            // litter: total output left behind
  uint32_t wiggleUntil;  // a few seconds of movement after an action, like a real cat
};
Action act[4];

// Change from the base weight caused by the sliders (grams)
float sliderAction(int i, float sliderG, uint32_t now) {
  Action& a = act[i];
  if (i < 2) {                                         // food / water bowl
    float up = sliderG - a.lastSlider;
    if (up > 0) { a.used += up / 1000.0 * BOWL_G_PER_KG; a.wiggleUntil = now + 1500; }
    a.lastSlider = sliderG;                            // sliding down: nothing happens
    float g = -a.used;
    if (now < a.wiggleUntil) g += wobble(now, 4);      // lapping / chewing
    return g;
  }
  bool on = sliderG >= CAT_ON_SLIDER_G;                // litter box / bed
  if (on && !a.catOn) { a.catOn = true; a.peak = 0; a.wiggleUntil = now + 1500; }
  if (on) a.peak = fmaxf(a.peak, sliderG);
  if (!on && a.catOn) {
    a.catOn = false; a.wiggleUntil = now + 1500;
    if (i == 2) a.left += a.peak / 1000.0 * LITTER_G_PER_KG;   // what the visit left behind
  }
  float g = a.left + (a.catOn ? CAT_G : 0);
  if (i == 2 && a.catOn) g += wobble(now, 15);         // digging the whole visit
  else if (now < a.wiggleUntil) g += wobble(now, 10);  // stepping on / off
  return g;
}

// ---------------- Helpers ----------------

// ISO 8601 time, e.g. 2026-11-08T08:07:01
void formatTime(time_t when, char* out, size_t len) {
  struct tm t;
  gmtime_r(&when, &t);
  strftime(out, len, "%Y-%m-%dT%H:%M:%S", &t);
}

// Print one readings.csv row and publish it live
void printRow(const Scale& s, time_t when, float grams) {
  char ts[24];
  formatTime(when, ts, sizeof(ts));
  Serial.printf("%s,%s,%s,%.1f\n", CAT_ID, s.device, ts, grams);
  if (mqtt.connected()) {
    char msg[128];
    snprintf(msg, sizeof(msg), "{\"cat\":\"%s\",\"device\":\"%s\",\"t\":\"%s\",\"g\":%.1f,\"boot\":\"%s\"}",
             CAT_ID, s.device, ts, grams, bootId);
    mqtt.publish(topicReadings, msg);
    // Also keep each scale's latest reading on the broker ("retained"),
    // so the app shows all 4 weights the moment it connects
    char lastTopic[80];
    snprintf(lastTopic, sizeof(lastTopic), "purrcast/%s/last/%s", PAIR_CODE, s.device);
    mqtt.publish(lastTopic, msg, true);
  }
}

// Send the current reading and blink the LED
void send(Scale& s, uint32_t nowMs) {
  printRow(s, time(nullptr), s.grams);
  s.lastSentMs = nowMs;
  digitalWrite(LED_PIN, HIGH);
  ledOffMs = nowMs + 60;
}

// Activity just started: first send the calm readings from the last few seconds
void sendPreRoll(Scale& s) {
  for (int i = 0; i < s.preCount; i++) printRow(s, s.preTime[i], s.preGrams[i]);
  s.preCount = 0;
}

// Keep the last PRE_ROLL calm readings (oldest first), one per second
void rememberCalm(Scale& s, uint32_t nowMs) {
  if (nowMs - s.lastPreMs < 1000) return;
  s.lastPreMs = nowMs;
  if (s.preCount == PRE_ROLL) {
    for (int i = 1; i < PRE_ROLL; i++) { s.preGrams[i - 1] = s.preGrams[i]; s.preTime[i - 1] = s.preTime[i]; }
    s.preCount--;
  }
  s.preGrams[s.preCount] = s.grams;
  s.preTime[s.preCount] = time(nullptr);
  s.preCount++;
}

float readGrams(int i, uint32_t nowMs) {
  float slider = scales[i].hx.get_units(1);     // the Wokwi slider, in grams
  float g = BASE_G[i] + sliderAction(i, slider, nowMs);
  if (AUTOPLAY) g += autoplayGrams(i, nowMs);   // plus the scripted cat
  return g;
}

// ---------------- Network ----------------
void connectWifi() {
  WiFi.mode(WIFI_STA);
  WiFi.begin(WIFI_SSID, "", 6);   // channel 6 connects fastest in Wokwi
  uint32_t start = millis();
  while (WiFi.status() != WL_CONNECTED && millis() - start < 10000) delay(100);
}

// Internet time if available, otherwise the fixed demo start time
void setClock() {
  if (WiFi.status() == WL_CONNECTED) {
    configTime(0, 0, "pool.ntp.org", "time.google.com");
    uint32_t start = millis();
    while (time(nullptr) < 1700000000 && millis() - start < 5000) delay(100);
  }
  if (time(nullptr) < 1700000000) {
    struct timeval tv = { START_EPOCH, 0 };
    settimeofday(&tv, nullptr);
  }
}

// Connect to the broker; the app sees "online", and "offline" if we drop off
void keepMqtt(uint32_t nowMs) {
  if (mqtt.connected()) { mqtt.loop(); return; }
  if (WiFi.status() != WL_CONNECTED || (mqttTried && nowMs - lastMqttTryMs < 3000)) return;
  mqttTried = true;
  lastMqttTryMs = nowMs;
  char clientId[40];
  snprintf(clientId, sizeof(clientId), "purrcast-%s-%04x", PAIR_CODE, (unsigned)(esp_random() & 0xffff));
  if (mqtt.connect(clientId, topicStatus, 0, true, "offline")) {
    mqtt.publish(topicStatus, "online", true);
    sendAllNow = true;
  }
}

void drawScreen() {
  if (!hasDisplay) return;
  display.clearDisplay();
  display.setTextSize(1);
  display.setTextColor(SSD1306_WHITE);
  display.setCursor(0, 0);
  display.print(PAIR_CODE);
  display.setCursor(98, 0);
  display.print(mqtt.connected() ? "LIVE" : "....");
  display.drawFastHLine(0, 10, 128, SSD1306_WHITE);
  for (int i = 0; i < SCALE_COUNT; i++) {
    Scale& s = scales[i];
    display.setCursor(0, 14 + i * 12);
    // "*" marks a scale that's busy (cat is using it)
    display.printf("%-7s%7.0f g %s", s.label, s.grams, s.busy ? "*" : "");
  }
  display.display();
}

// ---------------- Setup ----------------
void setup() {
  Serial.begin(115200);
  pinMode(LED_PIN, OUTPUT);
  hasDisplay = display.begin(SSD1306_SWITCHCAPVCC, 0x3C);
  if (hasDisplay) {
    display.clearDisplay(); display.setTextColor(SSD1306_WHITE);
    display.setCursor(0, 0); display.println("Purrcast"); display.println("Connecting Wi-Fi...");
    display.display();
  }

  snprintf(bootId, sizeof(bootId), "%08x", (unsigned)esp_random());
  connectWifi();
  setClock();
  snprintf(topicReadings, sizeof(topicReadings), "purrcast/%s/readings", PAIR_CODE);
  snprintf(topicStatus, sizeof(topicStatus), "purrcast/%s/status", PAIR_CODE);
  mqtt.setServer(MQTT_HOST, MQTT_PORT);
  mqtt.setKeepAlive(5);   // the broker notices within ~8 s if the simulation stops, and tells the app "offline"
  keepMqtt(millis());

  for (int i = 0; i < SCALE_COUNT; i++) {
    Scale& s = scales[i];
    s.hx.begin(s.dtPin, s.sckPin);
    s.hx.set_scale(RAW_PER_GRAM);   // readings in grams
    act[i].lastSlider = s.hx.get_units(1);   // wherever the slider starts counts as "no action"
    // No tare: the contract wants the total weight on the scale (bowl + contents)
    s.grams = s.prevGrams = readGrams(i, millis());
    s.busy = false;
    s.lastChangeMs = 0;
    s.lastSentMs = 0;
    s.preCount = 0;
    s.lastPreMs = 0;
  }

  Serial.println("cat_id,device,timestamp,grams");   // CSV header
  uint32_t now = millis();
  for (int i = 0; i < SCALE_COUNT; i++) send(scales[i], now);  // first check-in
}

// ---------------- Loop ----------------
void loop() {
  uint32_t now = millis();
  keepMqtt(now);
  if (sendAllNow && mqtt.connected()) {
    sendAllNow = false;
    for (int i = 0; i < SCALE_COUNT; i++) if (!scales[i].busy) send(scales[i], now);
  }

  for (int i = 0; i < SCALE_COUNT; i++) {
    Scale& s = scales[i];
    if (!s.hx.is_ready()) continue;
    s.grams = readGrams(i, now);

    // Weight moved since the last reading: something is happening
    if (fabs(s.grams - s.prevGrams) >= CHANGE_G) {
      s.lastChangeMs = now;
      if (!s.busy) {
        s.busy = true;
        sendPreRoll(s);          // the calm seconds just before...
        send(s, now);            // ...then the start of the activity, right away
      }
    }
    s.prevGrams = s.grams;
    if (!s.busy) rememberCalm(s, now);

    if (s.busy) {
      if (now - s.lastChangeMs >= SETTLE_MS) {
        s.busy = false;          // settled: send the final weight, then go quiet
        send(s, now);
      } else if (now - s.lastSentMs >= BURST_MS) {
        send(s, now);            // 1 reading per second while busy
      }
    } else if (now - s.lastSentMs >= HEARTBEAT_MS) {
      send(s, now);              // quiet check-in: "I'm still here"
    }
  }

  if (ledOffMs && now >= ledOffMs) {
    digitalWrite(LED_PIN, LOW);
    ledOffMs = 0;
  }
  if (now - lastDrawMs >= 250) {
    drawScreen();
    lastDrawMs = now;
  }
  delay(50);
}
