import { useFocusEffect } from "expo-router";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Formik, useFormik } from "formik";
import { ScrollView, View } from "react-native";
import FromAccount from "./from-account";
import ToAccount from "./to-account";
import { availableAccountOptions } from "../hooks/availableAccountOptions";
import AmountField from "./amount-field";
import DescriptionField from "./description-filed";
import { MainButton } from "@/ui/buttons/main-button";
import { initialValues } from "../domain/initialValues";
import { validationSchema } from "../domain/validationSchema";
import { useCreateTransfer } from "../../hooks/useCreateTranfer";
import { Preview } from "./preview";

import { Write } from "@/ui/text/write";
import { FeeField, IFee } from "../../add-fee/components/fee-field";
import { useCallback } from "react";

export default function CreateTransferForm() {
  const { availableAccountOptions: accountOptions, allOptions } =
    availableAccountOptions();
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const onSuccess = (data: any) => {
    console.log(data, "success");
  };
  const { createTransfer } = useCreateTransfer();

  useFocusEffect(
    useCallback(() => {
      formik.setValues(initialValues);
    }, [])
  );
  return (
    <View>
      <View style={{ padding: 10 }}>
        <SimpleTitle text="Hacer una transferencia" />
      </View>
      <ScrollView>
        <View>
          <View>
            {formik.values.to != "" && formik.values.from != "" && (
              <Preview
                toAccountId={formik.values.to}
                fromAmount={formik.values.fromAmount}
                toAmount={formik.values.toAmount}
                fee={formik.values.fee}
                fromAccountId={formik.values.from}
                accounts={allOptions}
              />
            )}
            <View style={{ paddingBlock: 5 }}>
              <FromAccount
                accountOptions={accountOptions}
                error={formik.errors.from}
                value={formik.values.from}
                onChange={(value: string) => {
                  formik.setValues({
                    ...formik.values,
                    from: value,
                    to: "",
                    fromAmount: 0,
                  });
                }}
              />
              {formik.values.from !== "" && (
                <AmountField
                  error={formik.errors.fromAmount}
                  selectedAccountId={formik.values.from}
                  label="Descuenta :"
                  value={formik.values.fromAmount}
                  onChange={(value: string) =>
                    formik.setFieldValue("fromAmount", Number(value))
                  }
                />
              )}
            </View>
            <View style={{ paddingBlock: 5 }}>
              <ToAccount
                accountOptions={accountOptions}
                discard={formik.values.from}
                value={formik.values.to}
                error={formik.errors.to}
                onChange={(value: string) => {
                  formik.setValues({
                    ...formik.values,
                    to: value,
                    toAmount: 0,
                  });
                }}
              />
              {formik.values.to !== "" && (
                <AmountField
                  error={formik.errors.toAmount}
                  selectedAccountId={formik.values.to}
                  value={formik.values.toAmount}
                  label="Ingresa :"
                  onChange={(value: string) =>
                    formik.setFieldValue("toAmount", Number(value))
                  }
                />
              )}
            </View>
            <FeeField
              value={formik.values.fee}
              onChange={(value: IFee[]) => {
                console.log(value);
                formik.setFieldValue("fee", value);
              }}
            />

            <DescriptionField
              onChange={formik.handleChange("description")}
              value={formik.values.description}
              error={formik.errors.description}
            />
          </View>
          <View>
            {Object.keys(formik.errors).map((key) => {
              console.log(formik.errors, "error");
              return (
                <Write key={key} text={`${key} `} style={{ color: "red" }} />
              );
            })}
            <MainButton
              title="Transferir"
              onPress={formik.handleSubmit}
              disabled={Object.keys(formik.errors).length > 0}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
