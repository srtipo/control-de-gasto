import { useColor } from "@/theme/hooks/useColor";
import { useState } from "react";
import { TextInput } from "react-native";

export const MoneyInput = ({
  value,
  onChange,
  error,
}: {
  value?: number;
  onChange: (value: string) => void;
  error?: string;
}) => {
  const color = useColor();
  const [amount, setAmount] = useState("0,00");

  return (
    <TextInput
      style={{
        height: 45,
        minWidth: 130,
        borderColor: error ? color.error : color.secondary,
        borderWidth: 1,
        backgroundColor: color.input,
        borderRadius: 10,
        textAlign: "right",
        fontSize: 18,
      }}
      placeholder="Monto"
      keyboardType="numeric"
      onChangeText={(value) => {
        const numericValue = getNumericValue(value);
        onChange(numericValue);
        setAmount(numericValue);
      }}
      value={
        value ? getFomatedAmount(value.toString()) : getFomatedAmount(amount)
      }
    />
  );
};

const cleanNumber = (amount: string) => {
  return amount.replace(/\D/g, "");
};

const getFomatedAmount = (amount: string) => {
  const cleanAmount = cleanNumber(amount);
  const decimalPart = cleanAmount.slice(-2);
  const integerPart = cleanAmount.slice(0, -2);
  let formatedIntegerPart = "0";
  let formatedDecimalPart = "00" + decimalPart;
  if (integerPart?.length > 0) {
    const value =
      integerPart?.length > 12 ? integerPart.slice(0, 12) : integerPart;
    formatedIntegerPart = value
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  if (integerPart?.length > 0) {
  }

  return formatedIntegerPart + "," + formatedDecimalPart.slice(-2);
};

const getNumericValue = (amount: string) => {
  const value = Number(cleanNumber(amount)) / 100;
  return value.toFixed(2);
};
