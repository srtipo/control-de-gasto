import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";

export function SimpleCard({ children }: { children: React.ReactNode }) {
  const color = useColor();
  return (
    <View
      style={{
        padding: 20,
        paddingBottom: 10,
        flexDirection: "column",
        backgroundColor: color.card,
        borderRadius: 30,
        boxShadow: `0px 8px 10px  ${color.shadow}`,
      }}
    >
      {children}
    </View>
  );
}
