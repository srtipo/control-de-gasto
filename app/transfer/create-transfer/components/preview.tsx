import { IAccount } from "@/app/Api-request/interface/response/accounts/get-account-list";
import { useColor } from "@/theme/hooks/useColor";
import TransferSvg from "@/ui/svg/transfer-svg";
import { Write } from "@/ui/text/write";
import { useEffect, useState } from "react";
import { View } from "react-native";
import { string } from "yup";
import { divideNumber } from "../../../../tools/decimal/divideNumber";
import { useGetAccounts } from "@/app/home/hooks/use-get-acoounts";
import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { IFee } from "../../add-fee/components/fee-field";
import { FeeAccount } from "../../add-fee/enums/fee-account-enum";

export function Preview({
  fromAmount,
  toAmount,
  fromAccountId,
  toAccountId,
  fee,
  accounts,
}: {
  fromAmount: number;
  toAmount: number;
  fromAccountId: string;
  toAccountId: string;
  fee: IFee[];
  accounts: IAccount[];
}) {
  const color = useColor();
  const { isLoading: isLoadingFromAccount, account: fromAccount } =
    useAccountDetails({ accountId: fromAccountId });
  const { isLoading: isLoadingToAccount, account: toAccount } =
    useAccountDetails({ accountId: toAccountId });

  const [toAccountValue, setToAccountValue] = useState<number>(0);

  const [fromAccountValue, setFromAccountValue] = useState<number>(0);

  useEffect(() => {
    setFromAccountValue(fromAmount);
  }, [fromAmount]);

  useEffect(() => {
    setToAccountValue(toAmount);
  }, [toAmount]);

  console.log(fee, "fee");

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        paddingBlock: 10,
      }}
    >
      <View style={{ flex: 0.5, width: 100 }}>
        <View style={{ justifyContent: "center", height: 40 }}>
          <Write
            numberOfLines={2}
            text={fromAccount?.name || ""}
            style={{ paddingInline: 10, textAlign: "center" }}
          />
        </View>
        {isLoadingFromAccount ? (
          <SimpleLoading />
        ) : (
          <>
            <Write
              text={`- ${fromAccountValue.toString()} ${
                fromAccount?.currency?.abbr
              }`}
              style={{
                paddingInline: 10,
                textAlign: "center",
                color: color.error,
              }}
            />
            {fee.map((item, index) => {
              if (item.feeAccount == FeeAccount.FROM) {
                return (
                  <Write
                    key={`${item.feeAccount}-${index}`}
                    text={`- ${item.feeValue} ${fromAccount?.currency?.abbr}`}
                    style={{
                      paddingInline: 10,
                      textAlign: "center",
                      color: color.error,
                    }}
                  />
                );
              }
            })}
          </>
        )}
      </View>
      <TransferSvg color={color.primary} />
      <View style={{ flex: 0.5 }}>
        <View style={{ justifyContent: "center", height: 40 }}>
          <Write
            numberOfLines={2}
            text={toAccount?.name || ""}
            style={{ paddingInline: 10, textAlign: "center" }}
          />
        </View>
        {isLoadingToAccount ? (
          <SimpleLoading />
        ) : (
          <>
            <Write
              text={`+ ${toAccountValue.toString()} ${
                toAccount?.currency?.abbr
              }`}
              style={{
                paddingInline: 10,
                textAlign: "center",
                color: color.success,
              }}
            />
            {fee.map((item, index) => {
              if (item.feeAccount == FeeAccount.TO) {
                return (
                  <Write
                    key={`${item.feeAccount}-${index}`}
                    text={`- ${item.feeValue} ${fromAccount?.currency?.abbr}`}
                    style={{
                      paddingInline: 10,
                      textAlign: "center",
                      color: color.error,
                    }}
                  />
                );
              }
            })}
            <Write
              text={`Total`}
              style={{
                paddingInline: 10,
                textAlign: "center",
                color: color.error,
              }}
            />
          </>
        )}
      </View>
    </View>
  );
}
