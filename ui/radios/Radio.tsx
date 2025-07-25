import { View } from "react-native";
import { Write } from "../text/write";
import { RadioGroup } from "react-native-radio-buttons-group";
import { useEffect, useState } from "react";

export interface IRadioButton {
  id: string;
  label: string;
  color: string;
  borderColor: string;
}

export function Radio({
  label,
  value,
  radioButtons,
  onChange,
}: {
  label: string;
  value: string;
  radioButtons: IRadioButton[];

  onChange: (value: string) => void;
}) {
  const [selectedId, setSelectedId] = useState<string>();

  useEffect(() => {
    setSelectedId(value);
  }, [value]);

  const handleChange = (value: string) => {
    onChange && onChange(value);
    setSelectedId(value);
  };
  return (
    <RadioGroup
      radioButtons={radioButtons}
      onPress={handleChange}
      selectedId={selectedId}
      labelStyle={{ color: "#fff" }}
      layout={"row"}
    />
  );
}
