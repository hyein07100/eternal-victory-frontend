import { Tabs } from "expo-router";
import { ThemeProvider } from "@emotion/react";
import { useFonts } from "expo-font";
import { theme } from "../src/theme";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  if (!loaded) {
    return null; 
  }

  return (
    <ThemeProvider theme={theme}>
      <Tabs screenOptions={{ headerShown: false }}>
        <Tabs.Screen name="index" options={{ title: "홈" }} />
        <Tabs.Screen name="stats" options={{ title: "통계" }} />
        <Tabs.Screen name="schedule" options={{ title: "일정" }} />
        <Tabs.Screen name="profile" options={{ title: "프로필" }} />
      </Tabs>
    </ThemeProvider>
  );
}
