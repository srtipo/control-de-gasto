import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";

export function DescriptionItems({
  item,
  value,
}: {
  item: string;
  value: string;
}) {
  const color = useColor();
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingBlock: 7,
      }}
    >
      <Text style={{ color: color.text, fontSize: 17 }}>{item}</Text>
      <Text style={{ color: color.text, fontSize: 17 }}>{value}</Text>
    </View>
  );
}
