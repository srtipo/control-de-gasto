import { useColor } from "@/theme/hooks/useColor";
import { Modal, TouchableWithoutFeedback, View } from "react-native";

export function SelectModal({
  IsVisible,
  children,
  onClose,
}: {
  IsVisible: boolean;
  children: React.ReactNode;
  onClose: () => void;
}) {
  const color = useColor();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={IsVisible}
      presentationStyle="overFullScreen"
      onRequestClose={onClose}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={onClose}>
          <View
            style={{
              padding: 20,
              borderRadius: 10,
              width: "100%",
              height: "50%",
            }}
          ></View>
        </TouchableWithoutFeedback>
        <View
          style={{
            backgroundColor: color.background,
            padding: 20,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            width: "100%",
            height: "50%",
          }}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
}
