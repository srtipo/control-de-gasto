import { useColor } from "@/theme/hooks/useColor";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import { View } from "react-native";

export interface ISelectListOption {
  label: string;
  value: string;
}

export function SelectList({
  placeholder,
  options,
  onChange,
  value,
  error,
}: {
  placeholder?: string;
  value?: string;
  options: ISelectListOption[];
  onChange?: (value: string) => void;
  error?: string;
}) {
  const [selectedItem, setSelectedItem] = useState<string | undefined>();

  const color = useColor();
  return (
    <View
      style={{
        borderColor: error ? color.error : color.secondary,
        borderWidth: 1,
        borderRadius: 9,
        padding: 3,
      }}
    >
      <Picker
        mode="dropdown"
        dropdownIconColor={color.primary}
        selectedValue={typeof value === "undefined" ? selectedItem : value}
        onValueChange={(itemValue: string) => {
          setSelectedItem(itemValue);
          onChange && onChange(itemValue);
        }}
        prompt="Selecciona una opción"
        style={{
          backgroundColor: "transparent",
          color: color.text,
        }}
      >
        {placeholder && (
          <Picker.Item
            key={""}
            label={placeholder}
            enabled={false}
            style={{
              backgroundColor: "transparent",
              color: color.placeHolder,
              fontSize: 15,
            }}
          />
        )}

        {options.map((item) => {
          return (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
              style={{
                color: color.textOnCard,
                fontSize: 15,
              }}
            />
          );
        })}
      </Picker>
    </View>
  );
}
