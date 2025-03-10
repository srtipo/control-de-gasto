import { SimpleCard } from "@/ui/cards/simple-card";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { ScrollView, Text, View } from "react-native";
import { CardItem } from "./card-item";
import { useGetCategoryList } from "@/app/transaction/hooks/useGetCategoryList";
import { useColor } from "@/theme/hooks/useColor";

export function CategorieCard({ table }: { table: React.ReactNode }) {
  const color = useColor();
  const { categoryList, isLoading } = useGetCategoryList({});
  return (
    <View style={{ paddingTop: 5 }}>
      <SimpleCard maxHeight={300}>
        {isLoading && <SimpleLoading />}
        {table}
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ paddingBlock: 5 }}>
            {categoryList?.map((category) => (
              <CardItem key={category.id} onPress={() => {}}>
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
    </View>
  );
}
