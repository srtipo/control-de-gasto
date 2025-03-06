import { useColor } from "@/theme/hooks/useColor";
import { ActivityIndicator } from "react-native";

export function SimpleLoading() {
  const { text: textColor } = useColor();
  return <ActivityIndicator size="large" color={textColor} />;
}
