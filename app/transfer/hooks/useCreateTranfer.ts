import { usePostRequest } from "@/app/Api-request/hooks/use-post-request";

export function useCreateTransfer() {
  const endpoint = "/transfers";
  const onSuccess = (data: any) => {
    console.log(data, "success");
  };
  const onError = (error: any) => {
    console.log(error, "error");
  };
  const { mutate } = usePostRequest({ endpoint, onSuccess, onError });
  const createTransfer = (data: any) => {
    const payload = JSON.stringify(data);
    mutate({ payload });
  };
  return { createTransfer };
}
