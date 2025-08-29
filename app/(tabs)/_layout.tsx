import { Tabs } from "expo-router";
import { getTabOptions } from "@utils/getTabOptions";
import { theme } from "src/theme";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          marginBottom: 10,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={getTabOptions({ filled: "home", outline: "home-outline", tabBarLabel: "홈" , headerShown: true })}
      />
      <Tabs.Screen
        name="stats/index"
        options={getTabOptions({ filled: "stats-chart", outline: "stats-chart-outline", tabBarLabel: "통계" })}
      />
      <Tabs.Screen
        name="schedule/index"
        options={getTabOptions({ filled: "calendar", outline: "calendar-outline", tabBarLabel: "일정" })}
      />
      <Tabs.Screen
        name="profile/index"
        options={getTabOptions({ filled: "person", outline: "person-outline", tabBarLabel: "프로필" })}
      />
    </Tabs>
  );
}
