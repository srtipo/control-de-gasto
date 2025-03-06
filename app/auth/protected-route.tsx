import { useSession } from "./session.provider";
import { Redirect, router } from "expo-router";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { session } = useSession();

  return <>{session ? children : <Redirect href="/" />}</>;
}
