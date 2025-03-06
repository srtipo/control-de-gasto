import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { IGetAccountDetailsResponse } from "@/app/Api-request/interface/response/accounts/get-account-details";
export function useAccountDetails({ accountId }: { accountId: string }) {
  const { data, isLoading, error } = useGetRequest(
    ["GET_TRANSACTION", accountId],
    `/accounts/${accountId}`
  );
  const account = data as IGetAccountDetailsResponse;
  return { account, isLoading, error };
}
