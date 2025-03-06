import { useColor } from "@/theme/hooks/useColor";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import CreateTransactionForm from "./components/create-transaction-form";

export default function TransactionPage() {
  const { accountId } = useLocalSearchParams();
  const color = useColor();
  return (
    <View
      style={{
        flex: 1,

        backgroundColor: color.background,
      }}
    >
      <CreateTransactionForm
        accountId={typeof accountId === "string" ? accountId : undefined}
      />
    </View>
  );
}
