import { useState } from "react";
import { Modal, TouchableWithoutFeedback, View } from "react-native";
import { useTransactionDetailModal } from "./transaction-detail-modal-provider";
import { TransactionDetailModalContent } from "./transaction-detail-modal-content";
import { useColor } from "@/theme/hooks/useColor";

export function TransactionDescriptionModal() {
  const { isVisible, closeModal } = useTransactionDetailModal();
  const color = useColor();
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => closeModal()}
    >
      <View
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
          alignItems: "center",
          flex: 1,
        }}
      >
        <TouchableWithoutFeedback onPress={() => closeModal()}>
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
          <TransactionDetailModalContent />
        </View>
      </View>
    </Modal>
  );
}
