import { useColor } from "@/theme/hooks/useColor";
import { useState } from "react";
import { TextInput } from "react-native";

export const IntegralMoneyInput = ({
  value,
  onChange,
  error,
}: {
  value?: number;
  onChange: (value: string) => void;
  error?: string;
}) => {
  const color = useColor();
  const [amount, setAmount] = useState("0");

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
  const value = amount?.length > 12 ? amount.slice(0, 12) : amount;
  const formatedIntegerPart = value
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  return formatedIntegerPart;
};

const getNumericValue = (amount: string) => {
  const value = Number(cleanNumber(amount));
  return value.toString();
};
