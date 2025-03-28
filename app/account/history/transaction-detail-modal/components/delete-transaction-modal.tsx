import { useColor } from "@/theme/hooks/useColor";
import { MainButton } from "@/ui/buttons/main-button";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Modal, Text, View } from "react-native";
import { useDeleteTransaction } from "../hooks/useDeleteTransaction";
import { useTransactionDetailModal } from "./transaction-detail-modal-provider";
import { useTransactionListContext } from "../../components/transaction-list-provider";

export function DeleteTransactionModal({
  state,
  id,
}: {
  state: [boolean, any];
  id: string;
}) {
  const [visible, setVisible] = state;
  const color = useColor();
  const { updateTransactionList } = useTransactionListContext();
  const { closeModal: closeDescriptionModal } = useTransactionDetailModal();
  const { deleteTransaction } = useDeleteTransaction(() => {
    setVisible(false);
  });
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={() => {
        setVisible(false);
      }}
    >
      <View style={{ flex: 1, backgroundColor: "trasparent" }}>
        <View
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
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
            <SimpleTitle text="¿Estás seguro de eliminar esta transacción?"></SimpleTitle>
            <Text style={{ color: color.text, fontSize: 15 }}>
              Esta acción no se puede deshacer.
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
                padding: 20,
              }}
            >
              <MainButton
                color={color.error}
                title="Eliminar"
                onPress={() => {
                  updateTransactionList((prevState: any) => {
                    return {
                      data: prevState.data.filter(
                        (item: any) => item.id !== id
                      ),
                      page: prevState.page,
                    };
                  });
                  deleteTransaction(id);
                  closeDescriptionModal();
                }}
              ></MainButton>
              <MainButton
                color={color.primary}
                title="Cancelar"
                onPress={() => {
                  setVisible(false);
                }}
              ></MainButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}
