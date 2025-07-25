import { Formik } from "formik";
import { addFeeInitialValues } from "../domain/add-fee-initial-values";
import { addFeeValidations } from "../domain/add-fee-validations";
import { MainButton } from "@/ui/buttons/main-button";
import { View } from "react-native";
import { Radio } from "@/ui/radios/Radio";
import { Write } from "@/ui/text/write";
import { SelectList } from "@/ui/select-list/select-list";
import { MoneyInput } from "@/ui/input/money-input";
import { useColor } from "@/theme/hooks/useColor";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { useState } from "react";
import { FeeAccount } from "../enums/fee-account-enum";

export function AddFeeForm({
  addFee,
}: {
  addFee: (value: number, account: FeeAccount, valueType: string) => void;
}) {
  const color = useColor();
  const { closeDetailsModal } = useDetailsModalContext();
  const [feeValue, setFeeValue] = useState<number>(0);
  const [feeAccount, setFeeAccount] = useState<FeeAccount>(FeeAccount.FROM);
  const [valueType, setValueType] = useState<string>("%");

  const radioButtons = [
    {
      id: FeeAccount.TO,
      label: "Entrate",
      color: color.primary,
      borderColor: color.secondary,
    },
    {
      id: FeeAccount.FROM,
      label: "Saliente",
      color: color.primary,
      borderColor: color.secondary,
    },
  ];
  return (
    <View style={{ paddingBlock: 10, flex: 1 }}>
      <Formik
        initialValues={addFeeInitialValues}
        validationSchema={addFeeValidations}
        onSubmit={(values) => {
          addFee(values.feeValue, values.account, values.feeType);
          closeDetailsModal();
        }}
      >
        {({ handleChange, handleSubmit, values, errors, setFieldValue }) => (
          <View
            style={{
              justifyContent: "space-between",
              paddingBlock: 10,
              flex: 1,
            }}
          >
            <View style={{ paddingBlock: 10 }}>
              <View
                style={{
                  paddingBlock: 2,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Write text="Tipo" />
                <Radio
                  label="Añadir comisión"
                  value="amount"
                  radioButtons={radioButtons}
                  onChange={(value) => {
                    value == FeeAccount.FROM
                      ? setFeeAccount(value)
                      : setFeeAccount(FeeAccount.TO);
                  }}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  paddingBlock: 10,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Write text="Valor" />
                <MoneyInput
                  onChange={(value: string) => {
                    setFeeValue(Number(value));
                  }}
                />
                <SelectList
                  styleBox={{ width: 120 }}
                  onChange={(value: string) => {
                    setValueType(value);
                  }}
                  options={[
                    { label: "%", value: "%" },
                    { label: "VES", value: "amount" },
                  ]}
                />
              </View>
            </View>
            <MainButton
              title="Añadir"
              onPress={() => {
                addFee(feeValue, feeAccount, valueType);
                closeDetailsModal();
              }}
            />
          </View>
        )}
      </Formik>
    </View>
  );
}
