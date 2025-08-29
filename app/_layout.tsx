import { ThemeProvider } from "@emotion/react";
import { useFonts } from "expo-font";
import { theme } from "../src/theme";
import { Slot } from "expo-router";

export default function RootLayout() {
  const [loaded] = useFonts({
    "Pretendard-Regular": require("../assets/fonts/Pretendard-Regular.ttf"),
    "Pretendard-SemiBold": require("../assets/fonts/Pretendard-SemiBold.ttf"),
    "Pretendard-Bold": require("../assets/fonts/Pretendard-Bold.ttf"),
  });

  if (!loaded) return null;

  return (
    <ThemeProvider theme={theme}>
      <Slot /> 
    </ThemeProvider>
  );
}
