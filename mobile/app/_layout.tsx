import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { CatProvider } from "../lib/CatContext";

export default function RootLayout() {
  return (
    <CatProvider>
      <StatusBar style="dark" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#FFFFFF" },
          headerTintColor: "#2C2C2A",
          headerTitleStyle: { fontWeight: "600" },
          contentStyle: { backgroundColor: "#FFFFFF" },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="cats" options={{ title: "Select Cat", presentation: "modal" }} />
        <Stack.Screen name="report" options={{ title: "Vet Summary" }} />
      </Stack>
    </CatProvider>
  );
}
