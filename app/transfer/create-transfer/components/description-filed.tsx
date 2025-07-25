import { Input } from "@/ui/input/input";
import { Write } from "@/ui/text/write";
import { View } from "react-native";

export default function DescriptionField({
  onChange,
  error,
  value,
}: {
  error?: string;
  value?: string;
  onChange: (value: string) => void;
}) {
  return (
    <View
      style={{
        paddingBlock: 10,
        flexDirection: "row",
      }}
    >
      <Write text="Descripción" style={{ paddingInline: 10, width: "35%" }} />
      <Input
        onChangeText={onChange}
        value={value}
        maxLength={30}
        boxStyle={{ width: "65%" }}
      />
    </View>
  );
}
