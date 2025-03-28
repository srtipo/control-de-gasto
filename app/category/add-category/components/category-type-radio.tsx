import { useColor } from "@/theme/hooks/useColor";
import { useEffect, useMemo, useState } from "react";
import { RadioGroup } from "react-native-radio-buttons-group";

export function CategoryTypeRadio({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const { primary, secondary, background, text } = useColor();
  const radioButtons = useMemo(
    () => [
      {
        id: "expense",
        label: "Gasto",
        color: primary,
        borderColor: secondary,
      },
      {
        id: "income",
        label: "Ingreso",
        color: primary,
        borderColor: secondary,
      },
    ],
    []
  );

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
      layout={"row"}
      radioButtons={radioButtons}
      onPress={handleChange}
      selectedId={selectedId}
      labelStyle={{ color: text }}
    />
  );
}
