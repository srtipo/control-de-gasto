import { useColor } from "@/theme/hooks/useColor";
import { SecundaryButton } from "@/ui/buttons/secundaryButtom";
import { MoneyInput } from "@/ui/input/money-input";
import { Write } from "@/ui/text/write";
import { View } from "react-native";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";

import { useState } from "react";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { SvgButton } from "@/ui/buttons/svg-buttom";
import TrashcanSvg from "@/ui/svg/trashcan-svg";
import { AddFeeModal } from "./add-fee-modal";
import { FeeAccount } from "../enums/fee-account-enum";

export interface IFee {
  feeType: string;
  feeAccount: FeeAccount;
  feeValue: number;
}
export function FeeField({
  error,
  onChange,
  fromAccountName,
  toAccountName,
  value,
}: {
  error?: string;
  onChange?: (value: IFee[]) => void;
  selectedAccountId?: string;
  fromAccountName?: string;
  toAccountName?: string;
  value?: number[];
}) {
  const color = useColor();
  const { openDetailsModal } = useDetailsModalContext();
  const [fee, setFee] = useState<IFee[]>([]);
  const addFee = (
    feeValue: number,
    feeAccount: FeeAccount,
    feeType: string
  ) => {
    onChange && onChange([...fee, { feeValue, feeAccount, feeType }]);
    setFee([...fee, { feeValue, feeAccount, feeType }]);
  };
  return (
    <View style={{ paddingBlock: 10 }}>
      {fee.map((item, index) => {
        return (
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
            key={`${item.feeAccount}-${index}`}
          >
            <Write
              text={`${item.feeAccount} `}
              key={`${item.feeAccount}-${index}`}
            ></Write>
            <View style={{ flexDirection: "row" }}>
              <Write
                text={`${item.feeValue} `}
                key={`${item.feeValue}-${index}`}
              ></Write>
              <Write
                text={`${item.feeType} `}
                key={`${item.feeType}-${index}`}
              ></Write>
            </View>
            <SvgButton
              onPress={() => {
                onChange?.(
                  fee.filter((_, indexTodele) => index !== indexTodele)
                );
                setFee((prevItems) =>
                  prevItems.filter((_, indexTodele) => index !== indexTodele)
                );
              }}
            >
              <TrashcanSvg color={color.error} />
            </SvgButton>
          </View>
        );
      })}
      <SecundaryButton
        title="+ Añadir Comisión"
        buttonColor={color.inputDisabled}
        onPress={() => {
          openDetailsModal();
        }}
      />
      <AddFeeModal addFee={addFee} />
    </View>
  );
}
