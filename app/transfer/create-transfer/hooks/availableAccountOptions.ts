import { useGetAccounts } from "@/app/home/hooks/use-get-acoounts";
import { ISelectListOption } from "@/ui/select-list/select-list";
import { useEffect, useState } from "react";

export function availableAccountOptions() {
  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();

  const [availableAccountOptions, setAvailableAccountOptions] = useState<
    ISelectListOption[]
  >([]);
  useEffect(() => {
    if (isLoadingAccounts) return;
    setAvailableAccountOptions(
      accounts.map((account) => ({
        label: account.name,
        value: account.id,
      }))
    );
  }, [accounts, isLoadingAccounts]);

  const deleteOption = (option: ISelectListOption) => {
    setAvailableAccountOptions(
      availableAccountOptions.filter((item) => item.value !== option.value)
    );
  };

  const addOption = (option: ISelectListOption) => {
    setAvailableAccountOptions([...availableAccountOptions, option]);
  };
  return {
    availableAccountOptions,
    deleteOption,
    addOption,
    allOptions: accounts,
  };
}
