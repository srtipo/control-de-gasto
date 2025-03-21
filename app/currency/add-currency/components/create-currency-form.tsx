import { View } from "react-native";
import { useColor } from "@/theme/hooks/useColor";
import { Formik } from "formik";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { FormItem } from "./form-item";
import { Input } from "@/ui/input/input";
import { MainButton } from "@/ui/buttons/main-button";
import { FormItemRow } from "./form-item-row";
import { SimpleSwitch } from "@/ui/switches/simple-switch";
import { SelectCurrencyValue } from "../../components/select-currency-value";
import { useState } from "react";
import { initialValues } from "../domain/initialValues";
import { validateCreateCurrency } from "../domain/validateCreateCurrency";
import { useCreateCurrency } from "../../hooks/useCreateCurrency";

export function CreateCurrencyForm() {
  const color = useColor();
  const [currencyName, setCurrencyName] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const { createCurrency } = useCreateCurrency();
  return (
    <View>
      <Formik
        initialValues={initialValues}
        validationSchema={validateCreateCurrency}
        onSubmit={(values) => {
          createCurrency(values);
        }}
      >
        {({ handleChange, handleSubmit, values, setFieldValue, errors }) => (
          <View style={{ paddingTop: 20 }}>
            <SimpleTitle text="Añadir moneda"></SimpleTitle>
            <View style={{ paddingTop: 20 }}>
              <FormItem label="Nombre" error={errors.name}>
                <Input
                  maxLength={20}
                  boxStyle={{ width: "100%" }}
                  placeholder="Nombre de la moneda"
                  onChangeText={(text: string) => {
                    setCurrencyName(text);
                    handleChange("name")(text);
                  }}
                  error={errors.name}
                ></Input>
              </FormItem>

              <FormItem label="abbr" error={errors.abbr}>
                <Input
                  maxLength={3}
                  boxStyle={{ width: "100%" }}
                  autoCapitalize="characters"
                  placeholder="Ejemplo: EUR"
                  error={errors.abbr}
                  onChangeText={handleChange("abbr")}
                ></Input>
              </FormItem>
              <FormItemRow label="Simbolo" error={errors.symbol}>
                <Input
                  boxStyle={{ width: 80 }}
                  autoCapitalize="characters"
                  placeholder="$"
                  textAlign="right"
                  maxLength={3}
                  error={errors.symbol}
                  onChangeText={handleChange("symbol")}
                ></Input>
              </FormItemRow>

              <FormItemRow label="Moneda Principal">
                <SimpleSwitch
                  onChange={(value: boolean) => {
                    setFieldValue("primary", value);
                    setFieldValue("value", 1);
                    setIsDisabled(value);
                  }}
                ></SimpleSwitch>
              </FormItemRow>
              <FormItemRow label="Value">
                <SelectCurrencyValue
                  value={values.value}
                  currencyName={currencyName}
                  disabled={isDisabled}
                  onChange={(value: Number) => setFieldValue("value", value)}
                ></SelectCurrencyValue>
              </FormItemRow>
            </View>
            <MainButton title="Añadir moneda" onPress={handleSubmit} />
          </View>
        )}
      </Formik>
    </View>
  );
}
