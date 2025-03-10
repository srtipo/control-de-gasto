import { useGetRequest } from "../../Api-request/hooks/use-get-request";
import { IAccount } from "@/app/Api-request/interface/response/accounts/get-account-list";

export function useGetAccounts() {
  const key = ["accounts"];
  const endpoint = "/accounts";
  const { data: accounts, ...restProps } = useGetRequest(key, endpoint);
  const data = accounts as IAccount[];
  return { data, ...restProps };
}
