import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { ISingleCurrency } from "@/app/Api-request/interface/response/currencies/single-currency-interface";

export function useGetPrimaryCurrency() {
  const { data, isLoading } = useGetRequest(
    ["GET_PRIMARY_CURRENCY"],
    "/currencies?primary=true"
  );
  const primaryCurrency = data?.[0] as ISingleCurrency;
  return { primaryCurrency, isLoading };
}
