import { View } from "react-native";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Write } from "@/ui/text/write";
import { ToBeSureModal } from "@/ui/modals/alert-modals/to-be-sure-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { ModalContextEnum } from "../domain/modal-context-enum";
import { MainButton } from "@/ui/buttons/main-button";
import { useColor } from "@/theme/hooks/useColor";
export function DeleteModal({ refresh }: { refresh?: () => void }) {
  const color = useColor();
  const { closeToBeSureModal, Confirm, Context, onConfirm } =
    useToBeSureModalContext();
  return (
    <View>
      {Context === ModalContextEnum.CurrencyDelete && (
        <ToBeSureModal>
          <View style={{ paddingBlock: 10 }}>
            <SimpleTitle text="Eliminar moneda"></SimpleTitle>
          </View>
          <View style={{ paddingBlock: 10, paddingInline: 20 }}>
            <Write text="¿Está seguro de eliminar esta moneda?" fontSize={16} />
          </View>
          <View
            style={{
              paddingBlock: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <MainButton
              color={color.error}
              title="Eliminar"
              onPress={() => {
                Confirm().finally(() => {
                  refresh?.();
                  closeToBeSureModal();
                });
              }}
            ></MainButton>
            <MainButton
              title="Cancelar"
              onPress={() => {
                closeToBeSureModal();
              }}
            />
          </View>
        </ToBeSureModal>
      )}
    </View>
  );
}
