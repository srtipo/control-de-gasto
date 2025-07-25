import { Stack } from "expo-router";
import { ProtectedRoute } from "../../../auth/protected-route";
import { useColor } from "@/theme/hooks/useColor";

export default function TransferLayout() {
  const color = useColor();
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen
          name="index"
          options={{
            title: "Transferir",
            headerTintColor: color.primary,
            headerStyle: {
              backgroundColor: color.background,
            },
          }}
        />
      </Stack>
    </ProtectedRoute>
  );
}
