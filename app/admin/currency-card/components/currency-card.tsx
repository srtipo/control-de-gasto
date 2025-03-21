import { useGetCurrencies } from "@/app/currency/hooks/useGetCurrencies";
import { SimpleCard } from "@/ui/cards/simple-card";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { ScrollView, Text, View } from "react-native";

import { useColor } from "@/theme/hooks/useColor";
import { CardItem } from "../../components/card-item";
import { useCallback, useState } from "react";
import { CurrencyDetails } from "./currency-details";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { ModalContextEnum } from "../domain/modal-context-enum";
import { DeleteModal } from "./delete-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { useDeleteCurrency } from "@/app/currency/hooks/useDeletecurrency";
import { Write } from "@/ui/text/write";
import { useFocusEffect } from "expo-router";
import { getCurrencyList } from "@/app/Api-request/interface/response/currencies/get-currency-list";

export function CurrencyCard({ table }: { table: React.ReactNode }) {
  const color = useColor();
  const { currencies, isLoading, refetch } = useGetCurrencies();
  const [selectedCurrency, setSelectedCurrency] = useState<string | null>(null);
  const { openDetailsModal } = useDetailsModalContext();
  const { openToBeSureModal, onConfirm } = useToBeSureModalContext();
  const { deleteCurrency } = useDeleteCurrency();

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [])
  );
  return (
    <View style={{ paddingTop: 5 }}>
      <SimpleCard maxHeight={300}>
        {isLoading && <SimpleLoading />}
        {table}
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ paddingBlock: 5 }}>
            {currencies?.length === 0 && (
              <Write
                style={{ textAlign: "center" }}
                text="No tienes monedas aún"
              ></Write>
            )}
            {currencies?.map((currency) => (
              <CardItem
                key={currency.id}
                onPress={() => {
                  setSelectedCurrency(currency.id);
                  openDetailsModal(ModalContextEnum.CurrencyDetails);
                }}
                onDelete={() => {
                  openToBeSureModal(ModalContextEnum.CurrencyDelete);
                  onConfirm(async () => {
                    deleteCurrency(currency.id).then(() => {
                      refetch();
                    });
                  });
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
      {selectedCurrency && <CurrencyDetails currencyId={selectedCurrency} />}

      <DeleteModal refresh={refetch} />
    </View>
  );
}
