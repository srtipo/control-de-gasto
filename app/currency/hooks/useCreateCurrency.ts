import { usePostRequest } from "@/app/Api-request/hooks/use-post-request";
import { router } from "expo-router";

export function useCreateCurrency() {
  const onSuccess = (data: any) => {
    router.replace("../");
  };
  const onError = (error: any) => {
    console.log(error, "error");
  };
  const { mutate } = usePostRequest({
    endpoint: "/currencies",
    onSuccess,
    onError,
  });
  const createCurrency = async (data: {
    name: string;
    abbr: string;
    symbol: string;
    primary: Boolean;
    value: number;
  }) => {
    const payload = JSON.stringify(data);
    console.log(payload, "payload");
    return mutate({ payload });
  };
  return { createCurrency };
}
