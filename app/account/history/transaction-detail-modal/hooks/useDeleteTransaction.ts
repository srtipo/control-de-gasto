import { useDeleteRequest } from "@/app/Api-request/hooks/use-delete-request";
import { useSubscription } from "@/app/Api-request/subscription-Provider";

export function useDeleteTransaction(
  transactionId: string,
  onSuccess: () => void
) {
  const key = ["deleteTransaction", transactionId];
  const { mutate, ...restProps } = useDeleteRequest({
    endpoint: `/transactions/${transactionId}`,
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  return { deleteTransaction: mutate, ...restProps };
}
