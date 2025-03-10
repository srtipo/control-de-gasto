import { useColor } from "@/theme/hooks/useColor";
import { StyleProp, Text, TextStyle } from "react-native";

export function Write({
  text,
  fontSize = 16,
  style,
}: {
  text: string | number;
  fontSize?: number;
  style?: StyleProp<TextStyle>;
}) {
  const color = useColor();
  return <Text style={[{ color: color.text, fontSize }, style]}>{text}</Text>;
}
