import { useColor } from "@/theme/hooks/useColor";
import { AddButton } from "@/ui/buttons/add-buttom";
import { router } from "expo-router";
import { View } from "react-native";

export function AddCurrencyButton() {
  const color = useColor();
  return (
    <View
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AddButton
        unPressedShadow={`2px 2px 2px ${color.shadow}`}
        onPress={() => {
          router.push(`/currency/add-currency`);
        }}
      ></AddButton>
    </View>
  );
}
