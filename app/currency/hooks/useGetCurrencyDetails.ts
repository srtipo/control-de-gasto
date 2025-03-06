import { useGetRequest } from "../../Api-request/hooks/use-get-request";

export function useGetCurrencyDetails({ currencyId }: { currencyId: string }) {
  const key = ["currency", currencyId];
  const endpoint = `/currencies/${currencyId}`;
  const { data, ...restProps } = useGetRequest(key, endpoint);
  const currency = data as ICurrency;
  return { currency, ...restProps };
}

export interface ICurrency {
  id: string;
  name: string;
}
