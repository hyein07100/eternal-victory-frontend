import type { ReactNode } from "react";
import { Ionicons } from "@expo/vector-icons";
import type { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs";
import { HeaderLogo } from "@components/HeaderLogo";
import { theme } from "../theme";

type IoniconName = keyof typeof Ionicons.glyphMap;

type Opts = {
  filled: IoniconName;
  outline: IoniconName;
  headerRight?: ReactNode;
  headerShown?: boolean;
  tabBarLabel?: string;
};

export function getTabOptions({
  filled,
  outline,
  headerRight,
  headerShown = true,
  tabBarLabel = "",
}: Opts): BottomTabNavigationOptions {
  return {
    headerTitle: () => <HeaderLogo />,
    headerTitleAlign: "left",         
    headerShadowVisible: false,       
    headerRight: headerRight ? () => <>{headerRight}</> : undefined,
    headerShown,
    title: tabBarLabel,             
    tabBarLabel: tabBarLabel,         
    tabBarIcon: ({ focused, color, size }) => (
      <Ionicons
        name={focused ? filled : outline}
        size={size ?? 24}
        color={focused ? theme.colors.primary : color ?? theme.colors.gray}
      />
    ),
  };
}
