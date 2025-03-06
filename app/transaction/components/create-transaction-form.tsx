import { Formik } from "formik";
import { ScrollView, Text, View } from "react-native";

import { SelectList } from "@/ui/select-list/select-list";
import { MainButton } from "@/ui/buttons/main-button";
import { MoneyInput } from "@/ui/input/money-input";
import { TimePicker } from "@/ui/picker/time-picker";
import { Switch } from "@/ui/switches/switch";
import DatePicker from "@/ui/picker/date-picker";
import { Input } from "@/ui/input/input";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";

import { useState } from "react";
import { useColor } from "@/theme/hooks/useColor";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { useCreateTransaction } from "../hooks/useCreateTransaction";
import { useCategoryOptions } from "../hooks/useCategoryOptions";
import { useAccountOptions } from "../hooks/useAccountOptions";
import { createTransactionSchema } from "../forms/create-transaction";
import { createtransactionFormInitialValue } from "../forms/initial-values/create-form-initial-value";
import { FormField } from "@/ui/forms/form-Field";
import { MessageError } from "@/app/Api-request/on-error/message-error";
import { getExactTime } from "../service/getExactTime";

export default function CreateTransactionForm({
  accountId,
}: {
  accountId?: string;
}) {
  const color = useColor();
  const [typeOptions, setTypeOptions] = useState<string>(
    TransactionTypeEnum.EXPENSE
  );
  const [accountSelected, SetAccountSelected] = useState<string>(
    accountId || ""
  );
  const { account, isLoading: isLoadingCurrency } = useAccountDetails({
    accountId: accountSelected,
  });
  const categoryOptions = useCategoryOptions(typeOptions);
  const accountOptions = useAccountOptions();

  const {
    request,
    isPending: creatingTransaction,
    error: transactionError,
  } = useCreateTransaction();

  return (
    <ScrollView>
      <Formik
        initialValues={{
          ...createtransactionFormInitialValue(),
          accountId: accountId || "",
        }}
        validationSchema={createTransactionSchema}
        onSubmit={(values) => {
          const date = `${values.date.year}-${values.date.month}-${values.date.day}`;
          const time = getExactTime({
            hour: values.time.hour,
            minute: values.time.minute,
          });
          const amount = Number(values.amount);
          const payload = {
            ...values,
            date,
            time,
            amount,
            account: values.accountId,
            currency: account?.currency.id,
          };
          request(payload);
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
          <View style={{ paddingTop: 30, flex: 1 }}>
            <View style={{ flex: 0.2 }}>
              <Switch
                onChange={(value) => {
                  setTypeOptions(value);
                  handleChange("type")(value);
                  setFieldValue("category", null);
                }}
                value={values.type}
                size={30}
                options={[
                  {
                    label: "Gasto",
                    value: TransactionTypeEnum.EXPENSE,
                  },
                  {
                    label: "Ingreso",
                    value: TransactionTypeEnum.INCOME,
                  },
                ]}
              />
            </View>
            <View
              style={{
                padding: 20,
                height: 560,
                justifyContent: "space-between",
                flex: 0.8,
                flexDirection: "column",
              }}
            >
              <FormField
                label="Cuenta"
                error={errors.accountId}
                labelStyle={{ fontSize: 18, color: color.text }}
              >
                <SelectList
                  placeholder="Selecciona una cuenta"
                  onChange={(value) => {
                    SetAccountSelected(value);
                    handleChange("accountId")(value);
                  }}
                  value={values.accountId}
                  options={accountOptions}
                  error={errors.accountId}
                />
              </FormField>

              <FormField
                label="Categoría"
                error={errors.category}
                labelStyle={{ fontSize: 18, color: color.text }}
              >
                <SelectList
                  placeholder="Selecciona una categoria"
                  onChange={handleChange("category")}
                  value={values.category}
                  options={categoryOptions}
                  error={errors.category}
                />
              </FormField>
              <FormField
                label="Monto"
                error={errors.amount}
                labelStyle={{ fontSize: 18, color: color.text }}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                errorStyle={{ textAlign: "right" }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MoneyInput
                    error={errors.amount}
                    value={values.amount}
                    onChange={handleChange("amount")}
                  />
                  {isLoadingCurrency && <SimpleLoading />}
                  {account?.currency.abbr && (
                    <Text
                      style={{
                        fontSize: 18,
                        color: color.text,
                        paddingInline: 5,
                      }}
                    >
                      {account?.currency.abbr}
                    </Text>
                  )}
                </View>
              </FormField>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 18, color: color.text }}>Fecha:</Text>
                <DatePicker
                  value={values.date}
                  onChange={(value) => setFieldValue("date", value)}
                />
                <Text style={{ fontSize: 18, color: color.text }}>Hora:</Text>
                <TimePicker
                  value={values.time}
                  onChange={(value) => {
                    setFieldValue("time", value);
                  }}
                />
              </View>

              <FormField
                label="Descripción"
                error={errors.description}
                errorStyle={{ paddingBlock: 5 }}
                labelStyle={{ fontSize: 18, color: color.text }}
              >
                <Input
                  error={errors.description}
                  boxStyle={{ width: "100%", height: 50 }}
                  placeholder="Descripción"
                  onChangeText={handleChange("description")}
                  value={values.description}
                />
              </FormField>

              {transactionError && (
                <Text style={{ color: color.error, textAlign: "center" }}>
                  {transactionError.message}
                </Text>
              )}

              <MainButton
                title="Submit"
                onPress={handleSubmit}
                disabled={creatingTransaction || Object.keys(errors).length > 0}
              />
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
}
