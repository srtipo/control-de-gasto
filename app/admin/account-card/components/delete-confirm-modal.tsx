import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";
import { ToBeSureModal } from "@/ui/modals/alert-modals/to-be-sure-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { MainButton } from "@/ui/buttons/main-button";
import { AccountModalContextEnum } from "../domain/account-modal-contex-enum";

export function DeleteConfirmModal({ refetch }: { refetch: () => void }) {
  const { closeToBeSureModal, Confirm, Context } = useToBeSureModalContext();
  const color = useColor();
  return (
    <View>
      {Context === AccountModalContextEnum.AccountDelete && (
        <ToBeSureModal>
          <View style={{ padding: 10 }}>
            <View style={{ paddingBlock: 10 }}>
              <SimpleTitle text="¿Estás seguro de eliminar esta cuenta?"></SimpleTitle>
            </View>

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
                  Confirm().finally(() => {
                    console.log("actualizando lista");
                    refetch();
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
          </View>
        </ToBeSureModal>
      )}
    </View>
  );
}
