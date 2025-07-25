import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";
import CreateTransferForm from "@/app/transfer/create-transfer/components/create-transfer-form";
import { DetailsModalProvider } from "@/ui/modals/details-modal/details-modal-provider";

export default function Transfer() {
  const color = useColor();
  return (
    <DetailsModalProvider>
      <View
        style={{
          backgroundColor: color.background,
          flex: 1,
          padding: 10,
        }}
      >
        <CreateTransferForm />
      </View>
    </DetailsModalProvider>
  );
}
