import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";
import { ToBeSureModal } from "@/ui/modals/alert-modals/to-be-sure-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { MainButton } from "@/ui/buttons/main-button";

export function DeleteConfirmModal({ refetch }: { refetch: () => void }) {
  const { setIsVisible, Confirm } = useToBeSureModalContext();
  const color = useColor();
  return (
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
                setIsVisible(false);
              });
            }}
          ></MainButton>
          <MainButton
            title="Cancelar"
            onPress={() => {
              setIsVisible(false);
            }}
          />
        </View>
      </View>
    </ToBeSureModal>
  );
}
