import { Stack } from "expo-router";
import { ThemeProvider } from "@emotion/react";
import { useFonts } from "expo-font";
import { theme } from "../src/theme";
import { HeaderLogo } from "@components/HeaderLogo";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

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
            backgroundColor: "#fff",
          },
        }}
      >
        <Stack.Screen name="login/index" options={{ headerShown: false }} />
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />

        <Stack.Screen
          name="write/index"
          options={{
            headerTitle: () => <HeaderLogo />,
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => router.back()}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
