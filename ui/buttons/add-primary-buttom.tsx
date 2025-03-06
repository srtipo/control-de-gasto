import { PrimaryButton } from "./primary.buttom";
import { Text, View } from "react-native";
import AddSvg from "../svg/add-svg";
import { useColor } from "@/theme/hooks/useColor";

export function AddPrimaryButton({
  text,
  onclick,
}: {
  text: string;
  onclick: () => void;
}) {
  const Colors = useColor();
  return (
    <PrimaryButton
      onPress={() => {
        onclick();
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: Colors.textButton, paddingInline: 10 }}>
          {text}
        </Text>
        <AddSvg color={Colors.textButton} height={20} width={20} />
      </View>
    </PrimaryButton>
  );
}
