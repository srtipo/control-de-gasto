import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { getCurrencyList } from "@/app/Api-request/interface/response/currencies/get-currency-list";

export function useGetCurrencies() {
  const { data, isLoading, error, ...restProps } = useGetRequest(
    ["GET_CURRENCY"],
    "/currencies"
  );
  return {
    currencies: data as getCurrencyList,
    isLoading,
    error,
    ...restProps,
  };
}
