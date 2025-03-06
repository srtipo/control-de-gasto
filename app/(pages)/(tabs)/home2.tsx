import { useColor } from "@/theme/hooks/useColor";
import HomeSvg from "@/ui/svg/home-svg";
import { Text, View } from "react-native";

export default function Home() {
  const color = useColor();
  return (
    <View>
      <Text style={{ color: color.text }}>Homesadasdasd</Text>
      <HomeSvg height={10} width={10} color={color.primary} />
    </View>
  );
}
