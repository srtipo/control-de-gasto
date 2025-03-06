import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";

export function TableTitle() {
  const color = useColor();
  return (
    <View
      style={{
        flexDirection: "row",
        paddingInline: 10,
        width: "100%",
        backgroundColor: color.inputDisabled,
        paddingBlock: 2,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: color.textOnCard,
          width: "25%",
        }}
      >
        Descripcion
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: color.textOnCard,
          width: "20%",
        }}
      >
        Hora
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: color.textOnCard,
          width: "25%",
        }}
      >
        Categoria
      </Text>
      <Text
        style={{
          textAlign: "center",
          color: color.textOnCard,
          width: "30%",
        }}
      >
        Valor
      </Text>
    </View>
  );
}
