import { useGetCurrencies } from "@/app/currency/hooks/useGetCurrencies";
import { SimpleCard } from "@/ui/cards/simple-card";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { ScrollView, Text, View } from "react-native";
import { CardItem } from "./card-item";
import { useColor } from "@/theme/hooks/useColor";

export function CurrencyCard({ table }: { table: React.ReactNode }) {
  const color = useColor();
  const { currencies, isLoading } = useGetCurrencies();
  return (
    <View style={{ paddingTop: 5 }}>
      <SimpleCard maxHeight={300}>
        {isLoading && <SimpleLoading />}
        {table}
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ paddingBlock: 5 }}>
            {currencies?.map((currency) => (
              <CardItem key={currency.id} onPress={() => {}}>
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
                    {currency.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      width: "35%",
                      color: color.text,
                      textAlign: "center",
                    }}
                  >
                    {currency.abbr}
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
