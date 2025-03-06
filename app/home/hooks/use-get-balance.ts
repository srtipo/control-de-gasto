import { useGetRequest } from "../../Api-request/hooks/use-get-request";

interface IBalance {
  TotalAmount: number;
  currency: {
    name: string;
    icon: string;
    abbr: string;
    value: number;
    primary: boolean;
  };
}

export function useGetBalance() {
  const key = ["balances"];
  const endpoint = "/balances";
  const { data: balances, ...restProps } = useGetRequest(key, endpoint);
  const data = balances as IBalance;
  return { data, ...restProps };
}
