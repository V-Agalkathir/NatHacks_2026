import { useEffect, useState, useCallback } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet, RefreshControl, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCat } from "../lib/CatContext";
import { getStatus } from "../lib/api";
import { CatStatus, Level } from "../lib/types";

type IconName = keyof typeof MaterialCommunityIcons.glyphMap;

export const LEVELS: Record<Level, { label: string; icon: IconName; bg: string; fg: string }> = {
  good: { label: "All good", icon: "check-circle-outline", bg: "#EAF3DE", fg: "#27500A" },
  blip: { label: "Minor blip", icon: "eye-outline", bg: "#E6F1FB", fg: "#0C447C" },
  vet: { label: "Worth a vet visit", icon: "calendar-check", bg: "#FAEEDA", fg: "#633806" },
  urgent: { label: "Call your vet now", icon: "alert-outline", bg: "#FCEBEB", fg: "#791F1F" },
};

const TILE_ICONS: Record<string, IconName> = {
  water: "water",
  food: "silverware-fork-knife",
  litter: "toilet",
  weight: "scale-bathroom",
};

export default function Home() {
  const router = useRouter();
  const { currentCatId } = useCat();
  const [data, setData] = useState<CatStatus | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [open, setOpen] = useState(false);

  const loadData = useCallback(async () => {
    try {
      const res = await getStatus(currentCatId);
      setData(res);
    } catch {
      // Handled in api layer fallback
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  }, [currentCatId]);

  useEffect(() => {
    setLoading(true);
    loadData();
  }, [loadData]);

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  if (loading && !data) {
    return (
      <View style={styles.loadingCenter}>
        <ActivityIndicator size="large" color="#0C447C" />
      </View>
    );
  }

  const cat = data!;
  const status = LEVELS[cat.level] || LEVELS.good;

  return (
    <ScrollView
      contentContainerStyle={styles.page}
      refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
    >
      {/* Top Bar with Cat Selector & Vet Report Navigation */}
      <View style={styles.header}>
        <Pressable
          style={styles.headerCatSection}
          onPress={() => router.push("/cats")}
          accessibilityRole="button"
          accessibilityLabel="Switch cat"
        >
          <View style={[styles.avatar, { backgroundColor: status.bg }]}>
            <MaterialCommunityIcons name="cat" size={24} color={status.fg} />
          </View>
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", gap: 4 }}>
              <Text style={styles.name}>{cat.name}</Text>
              <MaterialCommunityIcons name="chevron-down" size={18} color="#5F5E5A" />
            </View>
            <Text style={styles.muted}>Updated {cat.updated}</Text>
          </View>
        </Pressable>

        <Pressable
          style={styles.reportIconBtn}
          onPress={() => router.push("/report")}
          accessibilityRole="button"
          accessibilityLabel="Open vet report"
        >
          <MaterialCommunityIcons name="file-document-outline" size={22} color="#2C2C2A" />
        </Pressable>
      </View>

      {/* Main Single Status Card */}
      <View style={[styles.statusCard, { backgroundColor: status.bg }]}>
        <View style={styles.statusIcon}>
          <MaterialCommunityIcons name={status.icon} size={32} color={status.fg} />
        </View>
        <Text style={[styles.statusLabel, { color: status.fg }]}>{status.label}</Text>
        <Text style={[styles.statusMsg, { color: status.fg }]}>{cat.message}</Text>
      </View>

      {/* 4 Icon Tiles: minimal, icons over numbers */}
      <View style={styles.grid}>
        {cat.tiles.map((t) => {
          const c = t.ok ? LEVELS.good : LEVELS.vet;
          const icon = TILE_ICONS[t.key] || ("information-outline" as IconName);
          return (
            <View key={t.key || t.label} style={[styles.tile, { backgroundColor: c.bg }]}>
              <MaterialCommunityIcons name={icon} size={24} color={c.fg} />
              <Text style={[styles.tileText, { color: c.fg }]}>{t.label}</Text>
            </View>
          );
        })}
      </View>

      {/* Toggle Details ("See more") */}
      <Pressable style={styles.moreBtn} onPress={() => setOpen(!open)}>
        <Text style={styles.moreText}>{open ? "Show less" : "See more"}</Text>
        <MaterialCommunityIcons name={open ? "chevron-up" : "chevron-down"} size={20} color="#444" />
      </Pressable>

      {/* Three short cards only after See More */}
      {open && (
        <View style={{ gap: 10, marginTop: 4 }}>
          {cat.details?.changed ? (
            <Detail title="What changed" body={cat.details.changed} />
          ) : null}
          {cat.details?.maybe_nothing ? (
            <Detail title="Could be nothing" body={cat.details.maybe_nothing} />
          ) : null}
          {cat.details?.call_if ? (
            <Detail
              title="Call your vet if"
              body={cat.details.call_if}
              bg={LEVELS.urgent.bg}
              fg={LEVELS.urgent.fg}
            />
          ) : null}

          <Pressable
            style={styles.viewFullReportBtn}
            onPress={() => router.push("/report")}
          >
            <MaterialCommunityIcons name="clipboard-pulse-outline" size={20} color="#0C447C" />
            <Text style={styles.viewFullReportText}>View Vet Report</Text>
          </Pressable>
        </View>
      )}
    </ScrollView>
  );
}

function Detail({
  title,
  body,
  bg = "#F5F5F2",
  fg = "#2C2C2A",
}: {
  title: string;
  body: string;
  bg?: string;
  fg?: string;
}) {
  return (
    <View style={[styles.detail, { backgroundColor: bg }]}>
      <Text style={[styles.detailTitle, { color: fg }]}>{title}</Text>
      <Text style={[styles.detailBody, { color: fg }]}>{body}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  loadingCenter: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" },
  page: { padding: 20, paddingTop: 60, paddingBottom: 40, gap: 16, backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
  headerCatSection: { flexDirection: "row", alignItems: "center", gap: 12 },
  reportIconBtn: {
    width: 44,
    height: 44,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#E5E5E0",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FDFCFA",
  },
  avatar: { width: 44, height: 44, borderRadius: 22, alignItems: "center", justifyContent: "center" },
  name: { fontSize: 18, fontWeight: "600", color: "#2C2C2A" },
  muted: { fontSize: 13, color: "#5F5E5A" },
  statusCard: { borderRadius: 20, padding: 22, alignItems: "center" },
  statusIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: "#FFFFFF", alignItems: "center", justifyContent: "center", marginBottom: 12 },
  statusLabel: { fontSize: 22, fontWeight: "700" },
  statusMsg: { fontSize: 15, textAlign: "center", marginTop: 8, lineHeight: 22 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 10 },
  tile: { width: "48%", borderRadius: 14, padding: 14, flexDirection: "row", alignItems: "center", gap: 10 },
  tileText: { fontSize: 15, fontWeight: "600" },
  moreBtn: { flexDirection: "row", justifyContent: "center", alignItems: "center", gap: 6, padding: 13, borderRadius: 14, borderWidth: 1, borderColor: "#D3D1C7", backgroundColor: "#FAFAF8" },
  moreText: { fontSize: 15, fontWeight: "500", color: "#333" },
  detail: { borderRadius: 14, padding: 16 },
  detailTitle: { fontSize: 14, fontWeight: "700", marginBottom: 6 },
  detailBody: { fontSize: 14, lineHeight: 20 },
  viewFullReportBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 14,
    borderRadius: 14,
    backgroundColor: "#E6F1FB",
    marginTop: 6,
  },
  viewFullReportText: { color: "#0C447C", fontWeight: "600", fontSize: 15 },
});
