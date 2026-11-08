import { useEffect, useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet, ActivityIndicator, Alert, Share } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useCat } from "../lib/CatContext";
import { getVetReport } from "../lib/api";
import { VetReport, Level } from "../lib/types";

const LEVELS: Record<Level, { label: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; bg: string; fg: string }> = {
  good: { label: "All good", icon: "check-circle-outline", bg: "#EAF3DE", fg: "#27500A" },
  blip: { label: "Minor blip", icon: "eye-outline", bg: "#E6F1FB", fg: "#0C447C" },
  vet: { label: "Worth a vet visit", icon: "calendar-check", bg: "#FAEEDA", fg: "#633806" },
  urgent: { label: "Call your vet now", icon: "alert-outline", bg: "#FCEBEB", fg: "#791F1F" },
};

export default function ReportScreen() {
  const { currentCatId } = useCat();
  const [report, setReport] = useState<VetReport | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      const data = await getVetReport(currentCatId);
      setReport(data);
      setLoading(false);
    }
    fetchReport();
  }, [currentCatId]);

  const handleShare = async () => {
    if (!report) return;
    try {
      const message = `Purrcast Vet Report for ${report.name}\nStatus: ${report.level.toUpperCase()}\n\nSummary:\n${report.summary}\n\nKey Changes:\n${report.key_changes.map((c) => `• ${c}`).join("\n")}\n\nRecommendations:\n${report.recommendations.map((r) => `• ${r}`).join("\n")}`;
      await Share.share({
        message,
        title: `Purrcast Vet Report - ${report.name}`,
      });
    } catch {
      Alert.alert("Share", "Unable to share report at this moment.");
    }
  };

  if (loading || !report) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0C447C" />
      </View>
    );
  }

  const lvl = LEVELS[report.level] || LEVELS.good;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header card with Level */}
      <View style={styles.header}>
        <View>
          <Text style={styles.catName}>{report.name}</Text>
          <Text style={styles.subtitle}>14-Day Veterinary Summary</Text>
        </View>

        <View style={[styles.badge, { backgroundColor: lvl.bg }]}>
          <MaterialCommunityIcons name={lvl.icon} size={16} color={lvl.fg} />
          <Text style={[styles.badgeText, { color: lvl.fg }]}>{lvl.label}</Text>
        </View>
      </View>

      {/* Primary Clinical Summary */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>Clinical Overview</Text>
        <Text style={styles.summaryText}>{report.summary}</Text>
      </View>

      {/* Key Changes Detected */}
      <View style={styles.sectionCard}>
        <Text style={styles.sectionTitle}>What Changed (Last 14 Days)</Text>
        <View style={{ gap: 8, marginTop: 4 }}>
          {report.key_changes.map((change, i) => (
            <View key={i} style={styles.bulletRow}>
              <MaterialCommunityIcons name="alert-circle-outline" size={18} color="#0C447C" style={{ marginTop: 2 }} />
              <Text style={styles.bulletText}>{change}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* 14-Day Baseline Metrics */}
      {report.history_summary ? (
        <View style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>14-Day Averages</Text>
          <View style={styles.metricsGrid}>
            <View style={styles.metricItem}>
              <MaterialCommunityIcons name="water" size={20} color="#0C447C" />
              <Text style={styles.metricVal}>{report.history_summary.water_avg_ml} ml/day</Text>
              <Text style={styles.metricLabel}>Water</Text>
            </View>
            <View style={styles.metricItem}>
              <MaterialCommunityIcons name="silverware-fork-knife" size={20} color="#27500A" />
              <Text style={styles.metricVal}>{report.history_summary.food_avg_g} g/day</Text>
              <Text style={styles.metricLabel}>Food</Text>
            </View>
            <View style={styles.metricItem}>
              <MaterialCommunityIcons name="toilet" size={20} color="#633806" />
              <Text style={styles.metricVal}>{report.history_summary.litter_visits_avg} visits</Text>
              <Text style={styles.metricLabel}>Litter / Day</Text>
            </View>
            <View style={styles.metricItem}>
              <MaterialCommunityIcons name="scale-bathroom" size={20} color="#791F1F" />
              <Text style={styles.metricVal}>{report.history_summary.weight_kg} kg</Text>
              <Text style={styles.metricLabel}>Current Weight</Text>
            </View>
          </View>
        </View>
      ) : null}

      {/* Suggested Action / Recommendations */}
      <View style={[styles.sectionCard, { backgroundColor: lvl.bg }]}>
        <Text style={[styles.sectionTitle, { color: lvl.fg }]}>Recommended Action</Text>
        <View style={{ gap: 6, marginTop: 4 }}>
          {report.recommendations.map((rec, i) => (
            <Text key={i} style={[styles.recommendationText, { color: lvl.fg }]}>
              • {rec}
            </Text>
          ))}
        </View>
      </View>

      {/* Share / Export Action Button */}
      <Pressable style={styles.shareBtn} onPress={handleShare}>
        <MaterialCommunityIcons name="share-variant-outline" size={20} color="#FFFFFF" />
        <Text style={styles.shareBtnText}>Share Report with Vet</Text>
      </Pressable>

      <Text style={styles.disclaimer}>
        ⚠️ Purrcast is an observational monitoring aid and does not constitute a veterinary diagnosis.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 20, paddingBottom: 40, gap: 16, backgroundColor: "#FFFFFF" },
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" },
  header: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 },
  catName: { fontSize: 24, fontWeight: "700", color: "#2C2C2A" },
  subtitle: { fontSize: 14, color: "#7F7E7A", marginTop: 2 },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgeText: { fontSize: 13, fontWeight: "600" },
  sectionCard: {
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#F9F9F7",
    borderWidth: 1,
    borderColor: "#EAEAE6",
  },
  sectionTitle: { fontSize: 15, fontWeight: "700", color: "#2C2C2A", marginBottom: 8 },
  summaryText: { fontSize: 14, lineHeight: 21, color: "#3B3A36" },
  bulletRow: { flexDirection: "row", alignItems: "flex-start", gap: 8 },
  bulletText: { flex: 1, fontSize: 14, lineHeight: 20, color: "#3B3A36" },
  metricsGrid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between", gap: 10, marginTop: 6 },
  metricItem: {
    width: "48%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ECECE8",
    gap: 4,
  },
  metricVal: { fontSize: 15, fontWeight: "700", color: "#2C2C2A" },
  metricLabel: { fontSize: 12, color: "#7F7E7A" },
  recommendationText: { fontSize: 14, lineHeight: 20, fontWeight: "500" },
  shareBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "#0C447C",
    padding: 15,
    borderRadius: 14,
    marginTop: 8,
  },
  shareBtnText: { color: "#FFFFFF", fontSize: 16, fontWeight: "600" },
  disclaimer: { fontSize: 12, color: "#8C8B86", textAlign: "center", marginTop: 4, lineHeight: 18 },
});
