import { CreateCurrencyForm } from "@/app/currency/add-currency/components/create-currency-form";
import { useColor } from "@/theme/hooks/useColor";
import { KeyboardAvoidingView, View } from "react-native";

export default function AddCurrency() {
  const color = useColor();
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.background,
        paddingBlock: 20,
        paddingInline: 10,
      }}
    >
      <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
        <CreateCurrencyForm />
      </KeyboardAvoidingView>
    </View>
  );
}
