import { ProtectedRoute } from "@/app/auth/protected-route";
import { useColor } from "@/theme/hooks/useColor";
import { ToBeSureModalProvider } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { DetailsModalProvider } from "@/ui/modals/details-modal/details-modal-provider";
import { Stack } from "expo-router";

export default function AdminLayout() {
  const color = useColor();
  return (
    <ProtectedRoute>
      <DetailsModalProvider>
        <ToBeSureModalProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: color.background,
              },
              headerTintColor: color.primary,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen
              name="admin/index"
              options={{
                title: "Admin",
                headerTintColor: color.primary,
                headerStyle: {
                  backgroundColor: color.background,
                },
              }}
            />
            <Stack.Screen name="index" options={{ title: "Admin" }} />
          </Stack>
        </ToBeSureModalProvider>
      </DetailsModalProvider>
    </ProtectedRoute>
  );
}
