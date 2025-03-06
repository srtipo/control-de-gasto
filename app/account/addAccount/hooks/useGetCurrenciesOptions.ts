import { useGetCurrencies } from "@/app/currency/hooks/useGetCurrencies";
import { ISelectListOption } from "@/ui/select-list/select-list";
import { useEffect, useState } from "react";

export function useCurrenciesOption() {
  const { currencies, isLoading } = useGetCurrencies();
  const [currenciesOptions, setCurrenciesOptions] = useState<
    ISelectListOption[]
  >([]);

  useEffect(() => {
    if (isLoading) return;
    setCurrenciesOptions(
      currencies.map((category) => ({
        label: category.name,
        value: category.id,
      }))
    );
  }, [currencies, isLoading]);

  return currenciesOptions;
}
