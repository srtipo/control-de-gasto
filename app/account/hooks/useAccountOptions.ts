import { useGetAccounts } from "@/app/home/hooks/use-get-acoounts";
import { ISelectListOption } from "@/ui/select-list/select-list";
import { useEffect, useState } from "react";

export function useAccountOptions() {
  const { data: accounts, isLoading: isLoadingAccounts } = useGetAccounts();
  const [accountOptions, setAccountOptions] = useState<ISelectListOption[]>([]);
  useEffect(() => {
    if (isLoadingAccounts) return;
    setAccountOptions(
      accounts.map((account) => ({
        label: account.name,
        value: account.id,
      }))
    );
  }, [accounts, isLoadingAccounts]);
  return accountOptions;
}
