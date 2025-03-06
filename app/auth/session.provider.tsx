import { useContext, createContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import storeToken from "./token/store-token";

export interface ISessionContext {
  signIn: (token: string) => Promise<void>;
  signOut: () => void;
  session: string | null | undefined;
  isLoading: boolean;
}

const SessionContext = createContext<ISessionContext | undefined>(undefined);

export function SessionProvider({ children }: { children: React.ReactNode }) {
  const { data: token, isLoading } = useQuery({
    queryKey: [],
    queryFn: async () => await getToken(),
  });
  const [session, setSession] = useState<string | null | undefined>(token);
  const [isLoadingSession, setIsLoadingSession] = useState(isLoading);
  useEffect(() => {
    if (isLoading) {
      setIsLoadingSession(true);
    }
    if (!isLoading) {
      setIsLoadingSession(false);
      setSession(token);
    }
  }, [token, isLoading]);

  return (
    <SessionContext.Provider
      value={{
        signIn: async (token: string) => {
          storeToken.setToken(token);
          setSession(token);
        },
        signOut: async () => {
          setSession(undefined);
          storeToken.removeToken();
        },
        session: session,
        isLoading: isLoadingSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}
export function useSession() {
  const context = useContext(SessionContext);
  if (context === undefined) {
    throw new Error("useSession must be used within a SessionProvider");
  }
  return context;
}

async function getToken() {
  return storeToken.getToken();
}
