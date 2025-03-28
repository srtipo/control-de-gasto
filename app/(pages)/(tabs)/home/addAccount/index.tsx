import { CreateAccountForm } from "@/app/account/addAccount/components/create-account-form";
import { useColor } from "@/theme/hooks/useColor";
import { KeyboardAvoidingView, View } from "react-native";

export default function AddAccount() {
  const color = useColor();
  return (
    <View
      style={{ flex: 1, backgroundColor: color.background, paddingTop: 20 }}
    >
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <CreateAccountForm />
      </KeyboardAvoidingView>
    </View>
  );
}
