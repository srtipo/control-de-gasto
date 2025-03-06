import { router } from "expo-router";
import { Text } from "react-native";
import { useSession } from "../auth/session.provider";

export default function Index() {
  const { session, isLoading } = useSession();
  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (session) {
    router.replace("/home");
  }
  if (!session) {
    router.replace("/sign-in");
  }
}
