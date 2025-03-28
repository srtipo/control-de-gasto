import TransactionPage from "@/app/transaction/transaction-page";
import { KeyboardAvoidingView } from "react-native";

export default function AddTransaction() {
  return (
    <KeyboardAvoidingView behavior={"padding"} style={{ flex: 1 }}>
      <TransactionPage />
    </KeyboardAvoidingView>
  );
}
