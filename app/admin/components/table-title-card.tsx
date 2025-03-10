import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";

export function TableTitleCard({ items }: { items: string[] }) {
  const color = useColor();
  const width = 70 / items.length + 1;
  return (
    <View
      style={{
        backgroundColor: color.inputDisabled,
        flexDirection: "row",
        paddingInline: 10,
      }}
    >
      <View
        style={{
          width: "70%",
          justifyContent: "space-around",
          flexDirection: "row",

          paddingBlock: 1,
        }}
      >
        {items.map((item) => (
          <Text
            key={Math.random().toString(36).substring(2, 15)}
            style={{ width: `${width}%`, textAlign: "center" }}
          >
            {item}
          </Text>
        ))}
      </View>
      <View
        style={{
          width: "30%",
          justifyContent: "flex-end",
          flexDirection: "row",
        }}
      >
        <Text
          style={{
            color: color.textOnCard,
          }}
        >
          Acciones
        </Text>
      </View>
    </View>
  );
}
