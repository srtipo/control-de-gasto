import { useColor } from "@/theme/hooks/useColor";
import { Text } from "react-native";

export function SimpleTitle({ text, color }: { text: string; color?: string }) {
  const textColor: string = color || useColor().text;
  return (
    <Text
      style={{
        fontSize: 25,
        color: textColor,
        fontWeight: "bold",
        textAlign: "center",
      }}
    >
      {text}
    </Text>
  );
}
