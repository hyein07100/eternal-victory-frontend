import { Stack } from "expo-router";
import { ThemeProvider } from "@emotion/react";
import { useFonts } from "expo-font";
import { theme } from "../src/theme";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
  });
  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Stack
        screenOptions={{
          headerTitleAlign: "left",
          headerShadowVisible: false,
          headerStyle: {
            backgroundColor: "#fff"
          },
        }}
      >
        <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
