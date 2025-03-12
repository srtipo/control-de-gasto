import { useColor } from "@/theme/hooks/useColor";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useDetailsModalContext } from "./details-modal-provider";
export function DetailsModal({ children }: { children: React.ReactNode }) {
  const color = useColor();
  const { setIsVisible, isVisible } = useDetailsModalContext();

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => setIsVisible(false)}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={() => setIsVisible(false)}>
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
          {isVisible && children}
        </View>
      </View>
    </Modal>
  );
}
