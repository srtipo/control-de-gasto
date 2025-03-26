import { useColor } from "@/theme/hooks/useColor";
import { Modal, View } from "react-native";
import { useToBeSureModalContext } from "./to-be-sure-modal-provider";

export function ToBeSureModal({
  children,
  onCancel,
}: {
  children: React.ReactNode;
  onCancel?: () => void;
}) {
  const { isVisible, closeToBeSureModal } = useToBeSureModalContext();
  const color = useColor();
  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        onCancel && onCancel();
        closeToBeSureModal();
      }}
    >
      <View style={{ flex: 1, backgroundColor: "trasparent" }}>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            alignItems: "center",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              width: "100%",
              backgroundColor: color.background,
            }}
          >
            {children}
          </View>
        </View>
      </View>
    </Modal>
  );
}
