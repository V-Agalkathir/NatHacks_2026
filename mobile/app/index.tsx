import { useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;
type Level = "good" | "blip" | "vet" | "urgent";

const LEVELS: Record<Level, { label: string; icon: IconName; bg: string; fg: string }> = {
  good: { label: "All good", icon: "check-circle-outline", bg: "#EAF3DE", fg: "#27500A" },
  blip: { label: "Minor blip", icon: "eye-outline", bg: "#E6F1FB", fg: "#0C447C" },
  vet: { label: "Worth a vet visit", icon: "calendar-check", bg: "#FAEEDA", fg: "#633806" },
  urgent: { label: "Call your vet now", icon: "alert-outline", bg: "#FCEBEB", fg: "#791F1F" },
};

// Mock data. Replace with a fetch to the backend on Day 2.
const cat = {
  name: "Luna",
  updated: "5 min ago",
  level: "blip" as Level,
  message: "Luna drank a bit more yesterday. Nothing to do yet, we're watching.",
  tiles: [
    { label: "Water up", icon: "water" as IconName, ok: false },
    { label: "Food ok", icon: "silverware-fork-knife" as IconName, ok: true },
    { label: "Litter ok", icon: "toilet" as IconName, ok: true },
    { label: "Weight ok", icon: "scale-bathroom" as IconName, ok: true },
  ],
  details: {
    changed: "Water 260 ml yesterday vs her usual 190 ml. Everything else normal.",
    maybeNothing: "Warm day, dry food, or play. We'll recheck over the next 48 hours.",
    callIf: "She stops eating, vomits more than once, or strains in the litter box.",
  },
};

export default function Home() {
  const [open, setOpen] = useState(false);
  const status = LEVELS[cat.level];

  return (
    <ScrollView contentContainerStyle={styles.page}>
      <View style={styles.header}>
        <View style={[styles.avatar, { backgroundColor: LEVELS.vet.bg }]}>
          <MaterialCommunityIcons name="cat" size={24} color={LEVELS.vet.fg} />
        </View>
        <View>
          <Text style={styles.name}>{cat.name}</Text>
          <Text style={styles.muted}>Updated {cat.updated}</Text>
        </View>
      </View>

      <View style={[styles.statusCard, { backgroundColor: status.bg }]}>
        <View style={styles.statusIcon}>
          <MaterialCommunityIcons name={status.icon} size={30} color={status.fg} />
        </View>
        <Text style={[styles.statusLabel, { color: status.fg }]}>{status.label}</Text>
        <Text style={[styles.statusMsg, { color: status.fg }]}>{cat.message}</Text>
      </View>

      <View style={styles.grid}>
        {cat.tiles.map((t) => {
          const c = t.ok ? LEVELS.good : LEVELS.vet;
          return (
            <View key={t.label} style={[styles.tile, { backgroundColor: c.bg }]}>
              <MaterialCommunityIcons name={t.icon} size={24} color={c.fg} />
              <Text style={[styles.tileText, { color: c.fg }]}>{t.label}</Text>
            </View>
          );
        })}
      </View>

      <Pressable style={styles.moreBtn} onPress={() => setOpen(!open)}>
        <Text style={styles.moreText}>{open ? "Show less" : "See more"}</Text>
        <MaterialCommunityIcons name={open ? "chevron-up" : "chevron-down"} size={20} color="#444" />
      </Pressable>

      {open && (
        <View style={{ gap: 10 }}>
          <Detail title="What changed" body={cat.details.changed} />
          <Detail title="Could be nothing" body={cat.details.maybeNothing} />
          <Detail title="Call your vet if" body={cat.details.callIf} bg={LEVELS.urgent.bg} fg={LEVELS.urgent.fg} />
        </View>
      )}
    </ScrollView>
  );
}

function Detail({ title, body, bg = "#F5F5F2", fg = "#2C2C2A" }: { title: string; body: string; bg?: string; fg?: string }) {
  return (
    <View style={[styles.detail, { backgroundColor: bg }]}>
      <Text style={[styles.detailTitle, { color: fg }]}>{title}</Text>
      <Text style={[styles.detailBody, { color: fg }]}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: { padding: 20, paddingTop: 60, gap: 16, backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  name: { fontSize: 18, fontWeight: "500", color: "#2C2C2A" },
  muted: { fontSize: 13, color: "#5F5E5A" },
  statusCard: { borderRadius: 20, padding: 22, alignItems: "center" },
  statusIcon: { width: 60, height: 60, borderRadius: 30, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", marginBottom: 10 },
  statusLabel: { fontSize: 20, fontWeight: "600" },
  statusMsg: { fontSize: 15, textAlign: "center", marginTop: 6 },
  grid: { flexDirection: "row", flexWrap: "wrap", gap: 10 },
  tile: { width: "48%", borderRadius: 14, padding: 14, flexDirection: "row", alignItems: "center", gap: 8 },
  tileText: { fontSize: 15, fontWeight: "500" },
  moreBtn: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 4, padding: 12, borderRadius: 12, borderWidth: 1, borderColor: "#D3D1C7" },
  moreText: { fontSize: 15, color: "#444" },
  detail: { borderRadius: 14, padding: 14 },
  detailTitle: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
  detailBody: { fontSize: 14, lineHeight: 20 },
});
