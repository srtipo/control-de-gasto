import { useColor } from "@/theme/hooks/useColor";
import { Pressable, Text } from "react-native";

export function SecundaryButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  const color = useColor();
  return (
    <Pressable
      style={{
        backgroundColor: "transparent",
        borderColor: color.secondary,
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ color: color.secondary, fontSize: 15 }}>{title}</Text>
    </Pressable>
  );
}
