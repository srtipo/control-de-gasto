import { usePostRequest } from "@/app/Api-request/hooks/use-post-request";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { router } from "expo-router";

export function useCreateCategory() {
  const onSuccess = (data: any) => {
    router.push("../");
  };

  const { mutate } = usePostRequest({
    endpoint: "/transactions/categories",
    onSuccess,
  });
  const createCategory = (data: {
    description: string;
    name: string;
    type: TransactionTypeEnum;
  }) => {
    const payload = JSON.stringify(data);
    mutate({ payload });
  };

  return { createCategory };
}
