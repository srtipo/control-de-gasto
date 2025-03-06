import { Dashboard } from "@/app/home/dashboard";
import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";

export default function Home() {
  const color = useColor();
  return (
    <View
      style={{
        backgroundColor: color.background,
        flex: 1,
      }}
    >
      <Dashboard />
    </View>
  );
}
