import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";

export function useAllAccounts() {
  const { data, isLoading, error } = useGetRequest(
    ["GET_ALL_ACCOUNTS"],
    `/accounts`
  );
  return { data, isLoading, error };
}
