import { useColor } from "@/theme/hooks/useColor";
import AdminSvg from "@/ui/svg/admin-svg";
import HomeSvg from "@/ui/svg/home-svg";
import { Tabs } from "expo-router";
import { useEffect, useState } from "react";
import { Keyboard } from "react-native";
import TransferSvg from "@/ui/svg/transfer-svg";

export default function Layout() {
  const color = useColor();
  const [tabsVisible, setTabsVisible] = useState(true);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      () => {
        setTabsVisible(false);
      }
    );
    const keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      () => {
        setTabsVisible(true);
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarLabelPosition: "beside-icon",
        headerShown: false,
        tabBarStyle: {
          display: tabsVisible ? "flex" : "none",
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
        name="transfer"
        options={{
          title: "Transferir",
          tabBarIcon: ({ color }) => (
            <TransferSvg color={color} height={40} width={40} />
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
