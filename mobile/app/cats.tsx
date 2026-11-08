import { useEffect, useState } from "react";
import { View, Text, Pressable, StyleSheet, FlatList, ActivityIndicator } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useCat } from "../lib/CatContext";
import { getCats } from "../lib/api";
import { CatListItem, Level } from "../lib/types";

const LEVELS: Record<Level, { label: string; icon: keyof typeof MaterialCommunityIcons.glyphMap; bg: string; fg: string }> = {
  good: { label: "All good", icon: "check-circle-outline", bg: "#EAF3DE", fg: "#27500A" },
  blip: { label: "Minor blip", icon: "eye-outline", bg: "#E6F1FB", fg: "#0C447C" },
  vet: { label: "Worth a vet visit", icon: "calendar-check", bg: "#FAEEDA", fg: "#633806" },
  urgent: { label: "Call your vet now", icon: "alert-outline", bg: "#FCEBEB", fg: "#791F1F" },
};

export default function CatsScreen() {
  const router = useRouter();
  const { currentCatId, setCurrentCatId } = useCat();
  const [cats, setCats] = useState<CatListItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const list = await getCats();
      setCats(list);
      setLoading(false);
    }
    load();
  }, []);

  const selectCat = (id: string) => {
    setCurrentCatId(id);
    router.back();
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#0C447C" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.instruction}>Select a cat to inspect their current vitals & patterns:</Text>

      <FlatList
        data={cats}
        keyExtractor={(item) => item.cat_id}
        contentContainerStyle={{ gap: 12, paddingTop: 10 }}
        renderItem={({ item }) => {
          const isSelected = item.cat_id.toLowerCase() === currentCatId.toLowerCase();
          const lvl = LEVELS[item.level] || LEVELS.good;

          return (
            <Pressable
              style={[
                styles.card,
                isSelected && styles.selectedCard,
              ]}
              onPress={() => selectCat(item.cat_id)}
            >
              <View style={[styles.avatar, { backgroundColor: lvl.bg }]}>
                <MaterialCommunityIcons name="cat" size={26} color={lvl.fg} />
              </View>

              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.badgeRow}>
                  <View style={[styles.badge, { backgroundColor: lvl.bg }]}>
                    <MaterialCommunityIcons name={lvl.icon} size={14} color={lvl.fg} />
                    <Text style={[styles.badgeText, { color: lvl.fg }]}>{lvl.label}</Text>
                  </View>
                  {item.scenario ? (
                    <Text style={styles.scenarioTag}>({item.scenario})</Text>
                  ) : null}
                </View>
              </View>

              {isSelected ? (
                <MaterialCommunityIcons name="check-circle" size={24} color="#0C447C" />
              ) : (
                <MaterialCommunityIcons name="chevron-right" size={24} color="#B4B2A8" />
              )}
            </Pressable>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFFFFF", padding: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#FFFFFF" },
  instruction: { fontSize: 14, color: "#5F5E5A", marginBottom: 8 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderRadius: 16,
    backgroundColor: "#FAFAF8",
    borderWidth: 1.5,
    borderColor: "#E5E5E0",
  },
  selectedCard: {
    borderColor: "#0C447C",
    backgroundColor: "#F0F7FF",
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  info: { flex: 1, gap: 4 },
  name: { fontSize: 17, fontWeight: "600", color: "#2C2C2A" },
  badgeRow: { flexDirection: "row", alignItems: "center", gap: 8 },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  badgeText: { fontSize: 12, fontWeight: "600" },
  scenarioTag: { fontSize: 12, color: "#888780" },
});
