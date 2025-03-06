import { useColor } from "@/theme/hooks/useColor";
import { FormField } from "@/ui/forms/form-Field";
import { Input } from "@/ui/input/input";
import { MoneyInput } from "@/ui/input/money-input";
import { SelectList } from "@/ui/select-list/select-list";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Formik } from "formik";
import { ScrollView, Text, View } from "react-native";
import { useCurrenciesOption } from "../hooks/useGetCurrenciesOptions";
import { getAccountTypeOptions } from "../domain/getAccountTypeOptions";
import { addAccountInitialValues } from "../domain/addAccountInitialValues";
import { MainButton } from "@/ui/buttons/main-button";
import { accountSchema } from "../domain/addAccountValidations";
import { useCreateAccount } from "../hooks/useCreateAccount";

export function CreateAccountForm() {
  const color = useColor();
  const typesOptions = getAccountTypeOptions();
  const { createAccount } = useCreateAccount();

  const categoryOptions = useCurrenciesOption();

  return (
    <View
      style={{
        padding: 20,
        borderRadius: 10,
      }}
    >
      <View style={{ paddingBlock: 10 }}>
        <SimpleTitle text=" Creat Cuenta"></SimpleTitle>
      </View>
      <ScrollView>
        <Formik
          initialValues={addAccountInitialValues}
          onSubmit={(values) => {
            createAccount(values);
          }}
          validationSchema={accountSchema}
        >
          {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
            <View style={{ paddingBlock: 0 }}>
              <FormField
                error={errors.name}
                label="Nombre de la cuenta"
                labelStyle={{ fontSize: 18, paddingBottom: 3, paddingLeft: 10 }}
              >
                <Input
                  onChangeText={handleChange("name")}
                  boxStyle={{ width: "100%", height: 50 }}
                  placeholder="Nombre de la cuenta"
                ></Input>
              </FormField>
              <FormField
                label="Tipo de cuenta"
                error={errors.accountType}
                labelStyle={{ fontSize: 18 }}
              >
                <SelectList
                  error={errors.accountType}
                  onChange={handleChange("accountType")}
                  placeholder="Tipo de cuenta"
                  options={typesOptions}
                ></SelectList>
              </FormField>
              <FormField
                label="Moneda"
                error={errors.currency}
                labelStyle={{ fontSize: 18 }}
              >
                <SelectList
                  error={errors.currency}
                  onChange={handleChange("currency")}
                  placeholder="Selecciona una moneda"
                  options={categoryOptions}
                ></SelectList>
              </FormField>
              <FormField
                error={errors.balance}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                errorStyle={{ maxWidth: 170 }}
                label="Balance Inicial"
                labelStyle={{ fontSize: 18 }}
              >
                <MoneyInput
                  onChange={handleChange("balance")}
                  value={values.balance}
                ></MoneyInput>
              </FormField>

              <FormField
                error={errors.description}
                label="Description"
                labelStyle={{ fontSize: 18, paddingBottom: 3, paddingLeft: 10 }}
              >
                <Input
                  onChangeText={handleChange("description")}
                  boxStyle={{ width: "100%", height: 50 }}
                  placeholder="Descripción"
                ></Input>
              </FormField>
              <View style={{ paddingBlock: 15 }}>
                <MainButton
                  title="Crear Cuenta"
                  onPress={handleSubmit}
                  disabled={Object.keys(errors).length > 0}
                />
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
}
