import { useGetCategoryDetails } from "@/app/category/hooks/useGetCategoryDetails";
import { useColor } from "@/theme/hooks/useColor";
import { SecundaryButton } from "@/ui/buttons/secundaryButtom";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { DetailsModal } from "@/ui/modals/details-modal/details-modal";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Write } from "@/ui/text/write";
import { useEffect } from "react";
import { View } from "react-native";
export function CategorieDetailModal({
  isVisible,
  onClose,
  onDelete,
  categorieId,
}: {
  isVisible: boolean;
  onClose: () => void;
  onDelete: () => void;
  categorieId: string;
}) {
  const color = useColor();
  const { openDetailsModal, onCloseDetailsModal, closeDetailsModal } =
    useDetailsModalContext();
  const { categoryDetails, isLoading } = useGetCategoryDetails({
    categoryId: categorieId,
  });

  useEffect(() => {
    if (isVisible == true) {
      openDetailsModal();
      onCloseDetailsModal(() => {
        onClose();
      });
    } else {
      closeDetailsModal();
    }
  }, [isVisible]);
  return (
    <DetailsModal>
      {isLoading && <SimpleLoading />}
      {categoryDetails && (
        <View
          style={{
            paddingBlock: 20,
            paddingInline: 20,
            justifyContent: "space-around",
            height: "100%",
          }}
        >
          <View style={{ paddingBlock: 10 }}>
            <SimpleTitle
              text={`Categoría: ${categoryDetails.name}`}
            ></SimpleTitle>
          </View>
          <View>
            <View
              style={{
                paddingBlock: 10,

                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Write text="Nombre" fontSize={16} />
              <Write text={categoryDetails.name} fontSize={16} />
            </View>
            <View
              style={{
                paddingBlock: 10,

                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Write text="Tipo de categoría" fontSize={16} />
              <Write text={categoryDetails.type} fontSize={16} />
            </View>
          </View>

          <View
            style={{
              paddingBlock: 10,
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SecundaryButton
              textStyle={{ width: 100, textAlign: "center" }}
              title="Editar"
              onPress={() => {}}
            />
            <SecundaryButton
              textStyle={{
                width: 100,
                textAlign: "center",
              }}
              buttonColor={color.error}
              title="Eliminar"
              onPress={() => {
                onDelete();
              }}
            />
          </View>
        </View>
      )}
    </DetailsModal>
  );
}
