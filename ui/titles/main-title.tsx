import { useColor } from "@/theme/hooks/useColor";
import { Text } from "react-native";

export function MainTitle({ children }: { children: string }) {
  const colorPrimary = useColor().primary;
  return (
    <Text style={{ fontSize: 30, fontWeight: "bold", color: colorPrimary }}>
      {children}
    </Text>
  );
}
