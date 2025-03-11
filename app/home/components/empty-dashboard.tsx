import { AddPrimaryButton } from "@/ui/buttons/add-primary-buttom";
import { Write } from "@/ui/text/write";
import { router } from "expo-router";
import { View } from "react-native";

export function EmptyDashboard() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100%",
      }}
    >
      <View>
        <Write
          style={{ paddingBlock: 10 }}
          text="Aun no tienes cuentas"
        ></Write>
        <AddPrimaryButton
          onclick={() => {
            router.push("/(pages)/(tabs)/home/addAccount");
          }}
          text="Añadir cuenta"
        />
      </View>
    </View>
  );
}
