import { useColor } from "@/theme/hooks/useColor";
import { ISelectListOption, SelectList } from "@/ui/select-list/select-list";
import { Write } from "@/ui/text/write";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function ToAccount({
  accountOptions,
  onChange,
  value,
  error,
  discard,
}: {
  accountOptions: ISelectListOption[];
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
  discard?: string;
}) {
  const color = useColor();
  const [options, setOptions] = useState<ISelectListOption[]>([]);
  useEffect(() => {
    if (discard) {
      setOptions(accountOptions.filter((item) => item.value !== discard));
    } else {
      setOptions(accountOptions);
    }
  }, [accountOptions, discard]);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Write text="Hacia" style={{ paddingRight: 20 }} />
        <View>
          <SelectList
            onChange={onChange}
            value={value}
            error={error}
            options={options}
            placeholder="Selecciona una cuenta"
            styleBox={{ width: 250 }}
          />
        </View>
      </View>
      {error && (
        <Write
          text={error}
          style={{ color: color.error, textAlign: "right" }}
        />
      )}
    </View>
  );
}
