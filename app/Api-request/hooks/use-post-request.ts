import { useSession } from "@/app/auth/session.provider";
import { useMutation } from "@tanstack/react-query";
import { useHandleError } from "../on-error/hooks/use-handle-error";

export function usePostRequest({
  key,
  endpoint,
  onSuccess,
  onError,
}: {
  key?: string[];
  endpoint: string;
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) {
  const session = useSession();
  const { mutate, ...restProps } = useMutation({
    mutationFn: ({
      payload,
      formData,
    }: {
      payload?: string;
      formData?: FormData;
    }) => request({ endpoint, token: session?.session, payload, formData }),
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
  payload,
  formData,
  endpoint,
  token,
}: {
  payload?: string;
  formData?: FormData;
  endpoint: string;
  token: string | null | undefined;
}) => {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${token}`);

  const body = payload ? payload : formData;

  const response = await fetch(
    `${process.env.EXPO_PUBLIC_API_URL}${endpoint}`,
    {
      method: "POST",
      headers: myHeaders,
      body: body,
    }
  );
  if (!response.ok) {
    await useHandleError(response.status, response);
  }
  return response.json();
};
