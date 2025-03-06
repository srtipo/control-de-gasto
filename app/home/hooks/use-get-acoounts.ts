import { AccountTypeEnum } from "@/enums/account-type-enum";
import { useGetRequest } from "../../Api-request/hooks/use-get-request";

export function useGetAccounts() {
  const key = ["accounts"];
  const endpoint = "/accounts";
  const { data: accounts, ...restProps } = useGetRequest(key, endpoint);
  const data = accounts as IAccount[];
  return { data, ...restProps };
}

export interface IAccount {
  id: string;
  name: string;
  currency: string;
  balance: number;
  description: string;
  accountType: AccountTypeEnum;
}
