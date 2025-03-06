import { usePostRequest } from "@/app/Api-request/hooks/use-post-request";
import { router } from "expo-router";

export function useCreateAccount() {
  const key = ["accounts"];
  const endpoint = "/accounts";
  const { mutate, ...restProps } = usePostRequest({
    key,
    endpoint,
    onSuccess: (data) => {
      router.push(`/home`);
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const createAccount = (payload: {
    name: string;
    accountType: string;
    currency: string;
    balance: number;
    description: string;
  }) => {
    mutate({
      payload: JSON.stringify({ ...payload, balance: Number(payload.balance) }),
    });
  };
  return { createAccount, ...restProps };
}
