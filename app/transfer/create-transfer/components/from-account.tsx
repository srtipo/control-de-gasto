import { useColor } from "@/theme/hooks/useColor";
import { ISelectListOption, SelectList } from "@/ui/select-list/select-list";
import { Write } from "@/ui/text/write";
import { Text, View } from "react-native";
export default function FromAccount({
  accountOptions,
  onChange,
  value,
  error,
  discard,
}: {
  accountOptions: ISelectListOption[];
  discard?: string;
  onChange?: (value: string) => void;
  value?: string;
  error?: string;
}) {
  const color = useColor();

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Write text="Desde" style={{ paddingRight: 20 }} />
        <SelectList
          onChange={onChange}
          value={value}
          error={error}
          options={accountOptions}
          placeholder="Selecciona una cuenta"
          styleBox={{ width: 250 }}
        />
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
