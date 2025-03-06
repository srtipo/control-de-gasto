import { useSession } from "@/app/auth/session.provider";
import { useQuery } from "@tanstack/react-query";
import { router } from "expo-router";
import { useHandleError } from "../on-error/hooks/use-handle-error";

export const useGetRequest = (key: string[], endpoint: string) => {
  const session = useSession();
  const { data, error, ...restProps } = useQuery({
    queryKey: key,
    queryFn: () => request({ endpoint: endpoint, token: session?.session }),
  });
  if (error?.message === "Unauthorized") {
    session?.signOut();
    router.replace("/sign-in");
  }
  return { data, error, ...restProps };
};

const request = async ({
  token = "",
  endpoint,
}: {
  token: string | null | undefined;
  endpoint: string;
}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}${endpoint}`,
    {
      method: "GET",
      headers: myHeaders,
    }
  );

  if (!response.ok) {
    await useHandleError(response.status, await response.json());
  }
  return response.json();
};
