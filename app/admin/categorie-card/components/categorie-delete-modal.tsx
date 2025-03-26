import { useDeleteCategory } from "@/app/category/hooks/useDeleteCategories";
import { useColor } from "@/theme/hooks/useColor";
import { MainButton } from "@/ui/buttons/main-button";
import { ToBeSureModal } from "@/ui/modals/alert-modals/to-be-sure-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { useEffect } from "react";
import { View } from "react-native";

export function CategorieDeleteModal({
  categorieId,
  isVisible,
  refresh,
  onClose,
  onDelete,
}: {
  isVisible: boolean;
  categorieId: string;
  refresh: () => void;
  onClose: () => void;
  onDelete: () => void;
}) {
  const color = useColor();
  const { openToBeSureModal, closeToBeSureModal, Confirm } =
    useToBeSureModalContext();
  useEffect(() => {
    if (isVisible) {
      openToBeSureModal("CATEGORY_DELETE");
    }
  }, [isVisible]);

  const onSuccess = (data: any) => {
    refresh();
  };
  const { deleteCategory } = useDeleteCategory({ onSuccess });

  const onConfirm = async () => {
    deleteCategory(categorieId);
    closeToBeSureModal();
    onDelete();
  };

  return (
    <ToBeSureModal onCancel={onClose}>
      <View>
        <SimpleTitle text="¿Estás seguro de que quieres eliminar esta categoría?"></SimpleTitle>
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
          onPress={onConfirm}
        ></MainButton>
        <MainButton
          title="Cancelar"
          onPress={() => {
            onClose();
            closeToBeSureModal();
          }}
        />
      </View>
    </ToBeSureModal>
  );
}
