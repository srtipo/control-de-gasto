import { CreateAccountForm } from "@/app/account/addAccount/components/create-account-form";
import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";

export default function AddAccount() {
  const color = useColor();
  return (
    <View
      style={{ flex: 1, backgroundColor: color.background, paddingTop: 20 }}
    >
      <CreateAccountForm />
    </View>
  );
}
