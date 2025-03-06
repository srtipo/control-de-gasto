import { useColor } from "@/theme/hooks/useColor";
import HomeSvg from "@/ui/svg/home-svg";
import { MainTitle } from "@/ui/titles/main-title";
import { Stack, Tabs } from "expo-router";
import { View } from "react-native";

export default function Layout() {
  const color = useColor();
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: color.background,
          borderTopWidth: 1,
          borderColor: "rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <Tabs.Screen
        name="home2"
        options={{
          title: "Home2",
          tabBarIcon: ({ color }) => (
            <HomeSvg color={color} height={20} width={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg color={color} height={40} width={40} />
          ),
        }}
      />
    </Tabs>
  );
}
