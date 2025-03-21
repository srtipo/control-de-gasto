import { useColor } from "@/theme/hooks/useColor";
import { MainButton } from "@/ui/buttons/main-button";
import { MoneyInput } from "@/ui/input/money-input";
import { SelectModal } from "@/ui/modals/select-modal";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Write } from "@/ui/text/write";
import { useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { useGetPrimaryCurrency } from "../hooks/useGetPrimaryCurrency";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";

export function SelectCurrencyValue({
  currencyName,
  disabled = false,
  onChange,
  value,
}: {
  currencyName: string;
  disabled: boolean;
  onChange?: (value: Number) => void;
  value?: Number;
}) {
  const [IsVisible, setIsVisible] = useState(false);
  const [principalCurrecyValue, setPrincipalCurrecyValue] = useState(1);
  const [secondaryCurrecyValue, setSecondaryCurrecyValue] = useState(0);
  const [equivalentValue, setEquivalentValue] = useState(0);
  const color = useColor();
  const { primaryCurrency, isLoading } = useGetPrimaryCurrency();

  const calculateEquivalentValue = () => {
    if (secondaryCurrecyValue < 0.001 || principalCurrecyValue < 0.001) {
      return 1;
    }
    const value = principalCurrecyValue / secondaryCurrecyValue;
    return Number(value.toFixed(5));
  };

  useEffect(() => {
    setEquivalentValue(calculateEquivalentValue());
  }, [principalCurrecyValue, secondaryCurrecyValue]);

  useEffect(() => {
    if (!IsVisible) return;
    setPrincipalCurrecyValue(1);
    setSecondaryCurrecyValue(0);
    setEquivalentValue(1);
  }, [IsVisible]);
  return (
    <View>
      <Pressable
        style={{
          padding: 10,
          borderRadius: 10,
          borderColor: color.secondary,
          borderWidth: 1,
          backgroundColor: disabled ? color.inputDisabled : color.input,
        }}
        onPress={() => setIsVisible(true)}
        disabled={disabled}
      >
        <View
          style={{
            backgroundColor: disabled ? color.inputDisabled : color.input,
            width: 50,
            height: 20,
          }}
        >
          <Text style={{ textAlign: "center" }}>
            {value?.toString() || equivalentValue}
          </Text>
        </View>
      </Pressable>
      <SelectModal IsVisible={IsVisible} onClose={() => setIsVisible(false)}>
        <View style={{ width: "100%", height: "100%" }}>
          <View style={{ paddingBlock: 10 }}>
            <SimpleTitle text="Valor de la moneda"></SimpleTitle>
          </View>

          <View style={{ padding: 10, alignItems: "center" }}>
            <View
              style={{
                paddingBlock: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <MoneyInput
                defaultValue={100}
                onChange={(value) => {
                  setPrincipalCurrecyValue(Number(value));
                }}
              />
              {isLoading ? (
                <SimpleLoading />
              ) : (
                <Write
                  text={primaryCurrency?.name}
                  fontSize={18}
                  numberOfLines={1}
                  style={{ width: 150, textAlign: "center", paddingLeft: 10 }}
                ></Write>
              )}
            </View>
            <Write
              text="="
              fontSize={20}
              style={{ textAlign: "center" }}
            ></Write>
            <View
              style={{
                paddingBlock: 10,
                flexDirection: "row",

                alignItems: "center",
              }}
            >
              <MoneyInput
                onChange={(value) => {
                  setSecondaryCurrecyValue(Number(value));
                }}
              />
              <Write
                text={currencyName}
                numberOfLines={1}
                fontSize={18}
                style={{ width: 150, textAlign: "center", paddingLeft: 10 }}
              ></Write>
            </View>

            <View
              style={{
                paddingBlock: 10,
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Write
                text={`Valor: ${String(equivalentValue)}`}
                fontSize={20}
              ></Write>
            </View>
          </View>
          <MainButton
            title="Guardar"
            onPress={() => {
              setIsVisible(false);
              onChange && onChange(equivalentValue);
            }}
          />
        </View>
      </SelectModal>
    </View>
  );
}
