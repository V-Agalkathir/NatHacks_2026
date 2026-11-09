# 🔌 Purrcast scale node (Wokwi simulation, live to the app)

A simulated version of the Purrcast hardware: **one ESP32 reading four load cells** (food bowl, water bowl, litter box, bed) through **HX711 amplifiers**, with an OLED screen and an activity LED. It sends every reading **live over Wi-Fi**, and the Purrcast app shows what the cat is doing in real time.

```
Load cells → HX711 → ESP32 ──Wi-Fi──► MQTT broker ──► Purrcast app (laptop or phone)
                       └─ Serial Monitor (readings.csv) ──► sensors/ → engine/ → backend
```

## How the hardware works

| Scale | Under | What its weight changes tell us |
|---|---|---|
| **Food** (5 kg cell) | food bowl | drops = grams eaten; jumps up = refill (ignored) |
| **Water** (5 kg cell) | water bowl | drops = ml drunk (1 g ≈ 1 ml) |
| **Litter** (50 kg cell) | litter box | jumps by the cat's weight = visit; leftover = output; visit count and length |
| **Bed** (50 kg cell) | sleeping mat | the cat's weight, and how long it rests |

1. A **load cell** is a metal bar that bends very slightly under weight, changing its electrical resistance.
2. The **HX711** amplifies that tiny signal and turns it into a number, sent over 2 wires (DT data, SCK clock).
3. The **ESP32** reads each HX711 and converts to grams (`RAW_PER_GRAM`).
4. It reports like a battery-saving device: **3 calm readings from just before an activity, then 1 per second** while the weight changes, and a quiet **heartbeat** otherwise (which also proves the scale is alive).
5. Readings go to the Serial Monitor (in `readings.csv` format) and **live over Wi-Fi** to `purrcast/<pair code>/readings` on a public MQTT broker.

The ESP32 only reports weights. Working out *what happened* (a drink, a litter visit) happens in software: `sensors/` for the daily pipeline, and the app for the live view, using the same before/burst/after logic.

## Open it in Wokwi

1. [wokwi.com](https://wokwi.com) → **ESP32** → under Starter Templates, **ESP32** (Arduino).
2. Paste `diagram.json` into the **diagram.json** tab and `sketch.ino` into the **sketch.ino** tab.
3. **Library Manager** tab → **+** → add **HX711**, **Adafruit SSD1306**, **Adafruit GFX Library** and **PubSubClient**.
4. Click **▶**. The screen shows `PURR-7F3A` and **LIVE** once it's online, plus the 4 weights.
5. **Save** the project for a shareable link.

The free plan sometimes waits in a build queue first; it starts on its own.

## Live demo

1. **Start the Wokwi simulation** and wait for **LIVE** in the screen's top-right corner.
2. **Open the Purrcast app** (phone app from GitHub Pages, or `http://localhost:5500`).
3. Add a cat. On **Pair the scales**, type the code from the Wokwi screen (`PURR-7F3A`) and tap **Connect**. All 4 scales pair.
4. Home now has a **Live from the scales** card. With `AUTOPLAY` on, the cat runs its routine every 200 seconds:

| Seconds into the cycle | The cat | The app shows |
|---|---|---|
| 10–25 | drinks | "Luna is drinking" → **Drank 12 ml** |
| 35–55 | eats | "Luna is eating" → **Ate 9 g** |
| 65–125 | uses the litter box | "Luna is in the litter box" → **Used the litter box for 1 min, left 25 g. Weighs 9.3 lb** |
| 135–190 | naps on the bed | "Luna is napping" → **Napped for 1 min** |

The cartoon cat acts each one out, the busy scale glows yellow, and each event pops up as a notification.

5. **Act out the cat yourself** with the sliders (see below). Each load cell is labelled in the diagram.

### The sliders are cat actions

The bowl, box and bed weights are built in, so every slider starts at 0. Click a load cell while the simulation runs to get its slider:

| Slider | Do this | What happens |
|---|---|---|
| **Food bowl** | slide **up** | the cat eats, 10 g per 1 kg of slide (slide 2 kg → "Ate 20 g") |
| **Water bowl** | slide **up** | the cat drinks, 10 ml per 1 kg (slide 1 kg → "Drank 10 ml") |
| **Litter box** | slide **past 1 kg**, wait, slide **back to 0** | a visit by a 4.21 kg cat. How high you went = what it leaves: 5 kg ≈ 25 g (normal) |
| **Litter box** | quick **small bump** just past 1 kg, back to 0 | a visit with almost nothing left (≈ 7 g): the blockage warning sign |
| **Bed** | slide **past 1 kg**, later **back to 0** | the cat naps, then gets up |

Sliding a bowl back down does nothing (a cat can't un-drink), so you can't create unrealistic data by accident. Restarting the simulation clears the app's live card automatically, and the card also has a **Reset** button.

### Tips for a smooth pitch

- **Start the simulation before you present**, so it's already **LIVE** and the tiles have weights.
- **Pair once beforehand.** The app remembers the code, so it reconnects by itself.
- Time the pitch around the cycle: the litter visit (seconds 65–125) is the most impressive moment, since it shows the cat's weight and output.
- **Backup:** if the venue Wi-Fi blocks the connection, the rest of the app still works from the saved data, and the Serial Monitor still shows the readings.

## Settings (top of `sketch.ino`)

| Setting | Default | What it does |
|---|---|---|
| `PAIR_CODE` | `PURR-7F3A` | Code typed into the app. Change it to something unique if another team might use the same one |
| `AUTOPLAY` | `true` | Plays the cat's routine by itself. Set `false` to drive everything with the sliders |
| `HEARTBEAT_MS` | 30 s | Quiet check-in (real scales: 1 hour) |
| `CAT_ID` | `luna` | Which cat these scales belong to |

With `AUTOPLAY` off, nothing happens until you move a slider, which is handy for a fully hands-on demo. The amounts per slide (`BOWL_G_PER_KG`, `LITTER_G_PER_KG`), the cat's weight (`CAT_G`) and the built-in scale weights (`BASE_G`) are also at the top of `sketch.ino`.

The broker (`broker.hivemq.com`) is free and public: anyone who knows the pair code could see these readings. Only simulated demo data goes through it. A real product would use a private, secured broker.

## Wiring

| Part | Pin | ESP32 pin |
|---|---|---|
| Food HX711 (5 kg cell) | DT / SCK | D4 / D5 |
| Water HX711 (5 kg cell) | DT / SCK | D18 / D19 |
| Litter HX711 (50 kg cell) | DT / SCK | D32 / D33 |
| Bed HX711 (50 kg cell) | DT / SCK | D25 / D26 |
| All HX711s, OLED | VCC / GND | 3V3 / GND |
| OLED (SSD1306, I2C 0x3C) | SDA / SCL | D21 / D22 |
| Activity LED (+ 220 Ω) | anode | D23 |

## Run Wokwi output through the full pipeline

1. Copy the Serial Monitor text (from the `cat_id,device,timestamp,grams` header down) into `hardware/wokwi/wokwi_readings.csv`.
2. From the repo root: `python -m sensors.run --readings hardware/wokwi/wokwi_readings.csv`

Tested: one autoplay cycle comes out of `sensors/` as exactly a 12 ml drink, a 9 g meal, a litter visit with 25 g output by a 4.21 kg cat, and a nap.

## From simulation to real hardware

- **Parts per scale:** a load cell, an HX711 board and a flat platform. One ESP32 can read all four, or each scale gets its own ESP32.
- **Calibration:** Wokwi's cells give 420 raw units per kg (`RAW_PER_GRAM = 0.42`). A real cell needs its own number from a known test weight.
- **Two cats, one home:** the size of the weight jump on the litter box or bed tells cats apart (e.g. 4.2 kg vs 5.0 kg).
