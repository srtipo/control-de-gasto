import { useColor } from "@/theme/hooks/useColor";
import AdminSvg from "@/ui/svg/admin-svg";
import HomeSvg from "@/ui/svg/home-svg";
import { Tabs } from "expo-router";

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
        name="home"
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg color={color} height={40} width={40} />
          ),
        }}
      />
      <Tabs.Screen
        name="admin"
        options={{
          title: "Admin",
          tabBarIcon: ({ color }) => (
            <AdminSvg color={color} height={40} width={40} />
          ),
        }}
      />
    </Tabs>
  );
}
