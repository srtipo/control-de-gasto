import { SimpleCard } from "@/ui/cards/simple-card";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { ScrollView, Text, View } from "react-native";
import { CardItem } from "../../components/card-item";
import { useGetCategoryList } from "@/app/transaction/hooks/useGetCategoryList";
import { useColor } from "@/theme/hooks/useColor";
import { CategorieDetailModal } from "./categorie-detail-modal";
import { DetailsModalProvider } from "@/ui/modals/details-modal/details-modal-provider";
import { useCallback, useState } from "react";
import { ToBeSureModalProvider } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { CategorieDeleteModal } from "./categorie-delete-modal";
import { useFocusEffect } from "expo-router";

export function CategorieCard({ table }: { table: React.ReactNode }) {
  const color = useColor();
  const { categoryList, isLoading, refetch } = useGetCategoryList({});
  const [visibleModal, setVisibleModal] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );
  return (
    <DetailsModalProvider>
      <ToBeSureModalProvider>
        <View style={{ paddingTop: 5 }}>
          <SimpleCard maxHeight={300}>
            {isLoading && <SimpleLoading />}
            {table}
            <ScrollView nestedScrollEnabled={true}>
              <View style={{ paddingBlock: 5 }}>
                {categoryList?.map((category) => (
                  <CardItem
                    key={category.id}
                    onPress={() => {
                      setVisibleModal(true);
                      setSelectedCategory(category.id);
                    }}
                    onDelete={() => {
                      setDeleteModalVisible(true);
                      setSelectedCategory(category.id);
                    }}
                  >
                    <View
                      style={{
                        width: "70%",
                        justifyContent: "space-around",
                        flexDirection: "row",
                      }}
                    >
                      <Text
                        numberOfLines={1}
                        style={{
                          width: "35%",
                          color: color.text,
                          textAlign: "center",
                        }}
                      >
                        {category.name}
                      </Text>
                      <Text
                        numberOfLines={1}
                        style={{
                          width: "35%",
                          color: color.text,
                          textAlign: "center",
                        }}
                      >
                        {category.type}
                      </Text>
                    </View>
                  </CardItem>
                ))}
              </View>
            </ScrollView>
          </SimpleCard>
          {selectedCategory && (
            <>
              <CategorieDetailModal
                isVisible={visibleModal}
                categorieId={selectedCategory}
                onDelete={() => {
                  setDeleteModalVisible(true);
                }}
                onClose={() => {
                  setVisibleModal(false);
                }}
              />
              <CategorieDeleteModal
                isVisible={deleteModalVisible}
                categorieId={selectedCategory}
                refresh={refetch}
                onDelete={() => {
                  setVisibleModal(false);
                  setDeleteModalVisible(false);
                  refetch();
                }}
                onClose={() => {
                  setDeleteModalVisible(false);
                }}
              />
            </>
          )}
        </View>
      </ToBeSureModalProvider>
    </DetailsModalProvider>
  );
}
