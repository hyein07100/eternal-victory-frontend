import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { HeaderLogo } from "@components/HeaderLogo";

type Opts = {
  filled: keyof typeof Ionicons.glyphMap;
  outline: keyof typeof Ionicons.glyphMap;
  tabBarLabel?: string;
  headerShown?: boolean;
};

export function getTabOptions({
  filled,
  outline,
  tabBarLabel,
  headerShown = true,
}: Opts): BottomTabNavigationOptions {
  return {
    headerTitle: () => <HeaderLogo />,
    headerShown,
    tabBarLabel,
    tabBarIcon: ({ color, focused }) => (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Ionicons
          name={focused ? filled : outline}
          size={22}   
          color={color}
        />
      </View>
    ),
  };
}
