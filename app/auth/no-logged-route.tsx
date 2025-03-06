import { Redirect, router } from "expo-router";
import { useSession } from "./session.provider";
import { Text } from "react-native";

export function NoLoggedRoute({ children }: { children: React.ReactNode }) {
  const { session, isLoading } = useSession();
  if (session) {
    router.replace("/");
  }
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  return <>{children}</>;
}
