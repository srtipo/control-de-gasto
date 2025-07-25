import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { useColor } from "@/theme/hooks/useColor";
import { MoneyInput } from "@/ui/input/money-input";
import { Write } from "@/ui/text/write";
import { View } from "react-native";
export default function AmountField({
  error,
  onChange,
  selectedAccountId,
  value,
  label = "Monto",
}: {
  error?: string;
  onChange?: (value: string) => void;
  selectedAccountId?: string;
  value?: number;
  label?: string;
}) {
  const color = useColor();
  const { account: accountDetails } = useAccountDetails({
    accountId: selectedAccountId || "",
  });
  return (
    <View style={{ paddingBlock: 7 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Write text={label} style={{ width: 100 }} />
        <View
          style={{
            flexDirection: "row",
            width: 280,
            justifyContent: "space-between",
          }}
        >
          <MoneyInput
            error={error}
            value={value}
            onChange={(value) => {
              onChange && onChange(value);
            }}
            width={220}
          />
          <View style={{ justifyContent: "center" }}>
            {accountDetails?.currency?.abbr && (
              <Write
                text={accountDetails?.currency.abbr}
                style={{ paddingInline: 10 }}
              />
            )}
          </View>
        </View>
      </View>
      {error && (
        <Write
          text={error}
          style={{ color: color.error, textAlign: "right" }}
        />
      )}
    </View>
  );
}
