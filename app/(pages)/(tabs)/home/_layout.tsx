import { Stack } from "expo-router";
import { ProtectedRoute } from "../../../auth/protected-route";
import { useColor } from "@/theme/hooks/useColor";
import { Component } from "react";
import HomeSvg from "@/ui/svg/home-svg";
import HomeHeaderRiht from "@/app/home/home-header-right";

export default function HomeLayout() {
  const color = useColor();
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
            headerTintColor: color.primary,
            headerStyle: {
              backgroundColor: color.background,
            },
            headerLeft: () => (
              <HomeSvg color={color.primary} height={40} width={40} />
            ),
            headerRight: () => <HomeHeaderRiht />,
          }}
        />
        <Stack.Screen
          name="addTransaction/index"
          options={{ title: "Añadir transacción" }}
        />
        <Stack.Screen
          name="addAccount/index"
          options={{ title: "Añadir cuenta" }}
        />
      </Stack>
    </ProtectedRoute>
  );
}
