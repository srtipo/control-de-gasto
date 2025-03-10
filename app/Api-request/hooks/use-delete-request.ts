import { useMutation } from "@tanstack/react-query";
import { useHandleError } from "../on-error/hooks/use-handle-error";
import { useSession } from "@/app/auth/session.provider";

export function useDeleteRequest({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) {
  const session = useSession();
  const { mutate, ...restProps } = useMutation({
    mutationFn: (endpoiont: string): Promise<any> =>
      request({ endpoint: endpoiont, token: session?.session }),
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error) => {
      onError && onError(error);
    },
  });
  return { mutate, ...restProps };
}

const request = async ({
  endpoint,
  token,
}: {
  endpoint: string;
  token: string | null | undefined;
}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}${endpoint}`,
    {
      method: "DELETE",
      headers: myHeaders,
    }
  );
  if (!response.ok) {
    await useHandleError(response.status, response);
  }
  return response.json();
};
