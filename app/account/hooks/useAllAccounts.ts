import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { useSubscription } from "@/app/Api-request/subscription-Provider";

export function useAllAccounts() {
  const { getKey } = useSubscription();
  const { data, isLoading, error } = useGetRequest(
    ["GET_ALL_ACCOUNTS", getKey()],
    `/accounts`
  );
  return { data, isLoading, error };
}
