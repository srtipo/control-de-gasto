import { usePostRequest } from "@/app/Api-request/hooks/use-post-request";
import { useSubscription } from "@/app/Api-request/subscription-Provider";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { router } from "expo-router";

interface ICreateTransaction {
  accountId: string;
  category: string;
  type: TransactionTypeEnum;
  amount: number;
  description: string;
  date: string;
  time: string;
}

export function useCreateTransaction() {
  const onSuccess = (data: any) => {
    router.push("/home");
  };

  const { mutate, ...restProps } = usePostRequest({
    key: ["transaction"],
    endpoint: "/transactions",
    onSuccess,
  });
  const request = (body: ICreateTransaction) => {
    const payload = JSON.stringify(body);
    return mutate({ payload });
  };
  return { request, ...restProps };
}
