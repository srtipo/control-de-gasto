import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { SelectCurrencyValue } from "@/app/currency/components/select-currency-value";
import { Write } from "@/ui/text/write";
import { View } from "react-native";

export function RateField({
  onChange,
  value,
  error,
  toAccountId,
  fromAccountId,
}: {
  onChange?: (value: Number) => void;
  toAccountId: string;
  fromAccountId: string;
  value?: number;
  error?: string;
}) {
  const { account: fromAccountData, isLoading: loandinFromAccount } =
    useAccountDetails({
      accountId: fromAccountId,
    });
  const { account: toAccountData, isLoading: loandinToAccount } =
    useAccountDetails({
      accountId: toAccountId,
    });
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <View>
        <Write text="Tipo de cambio" style={{ paddingInline: 10 }} />
      </View>
      {!loandinFromAccount && !loandinToAccount && (
        <SelectCurrencyValue
          value={value}
          mainCurrencyData={fromAccountData.currency}
          compareCurrencyData={toAccountData.currency}
          onChange={onChange}
        ></SelectCurrencyValue>
      )}
    </View>
  );
}
