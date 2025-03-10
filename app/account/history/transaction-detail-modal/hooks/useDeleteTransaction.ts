import { useDeleteRequest } from "@/app/Api-request/hooks/use-delete-request";

export function useDeleteTransaction(onSuccess: () => void) {
  const { mutate, ...restProps } = useDeleteRequest({
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const deleteTransaction = (transactionId: string) => {
    return mutate(`/transactions/${transactionId}`);
  };
  return { deleteTransaction, ...restProps };
}
