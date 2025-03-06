import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { useSubscription } from "@/app/Api-request/subscription-Provider";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";

export type ITransaction = {
  id: string;
  amount: number;
  date: string;
  description?: string;
  currency: {
    name: string;
    abbr: string;
  };
  type: TransactionTypeEnum;
  category: {
    name: string;
    id: string;
    type: TransactionTypeEnum;
  };
};
export type TransactionResponse = {
  data: ITransaction[];
  page: number;
};

export type TransactionResponseWithFilteredDates = {
  date: string;
  data: ITransaction[];
}[];
export const useAccountHistory = (accountId: string, page: number) => {
  const { getKey } = useSubscription();

  const { data, error, isLoading, refetch, isFetching } = useGetRequest(
    ["GET_ACCOUNT_HISTORY", accountId, page.toString(), getKey()],
    `/transactions?account=${accountId}${page ? `&page=${page}` : ""}`
  );
  return {
    transaction: data as TransactionResponse,
    error,
    isLoading,
    refetch,
    isFetching,
  };
};
