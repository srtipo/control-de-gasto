import { Stack } from "expo-router";
import { useColor } from "@/theme/hooks/useColor";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { SessionProvider } from "../auth/session.provider";
import { SubscriptionProvider } from "../Api-request/subscription-Provider";

export default function RootLayout() {
  const color = useColor();
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <SubscriptionProvider>
        <SessionProvider>
          <Stack
            screenOptions={{
              headerStyle: {
                backgroundColor: color.background,
              },
              headerTintColor: color.text,
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          >
            <Stack.Screen name="sign-in" options={{ headerShown: false }} />
            <Stack.Screen name="home" options={{ headerShown: false }} />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="account" options={{ headerShown: false }} />
            <Stack.Screen name="currency" options={{ headerShown: false }} />
            <Stack.Screen name="category" options={{ headerShown: false }} />
          </Stack>
        </SessionProvider>
      </SubscriptionProvider>
    </QueryClientProvider>
  );
}
