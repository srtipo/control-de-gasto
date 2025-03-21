import { useGetCurrencyDetails } from "@/app/currency/hooks/useGetCurrencyDetails";
import { useColor } from "@/theme/hooks/useColor";
import { SecundaryButton } from "@/ui/buttons/secundaryButtom";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { DetailsModal } from "@/ui/modals/details-modal/details-modal";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Text, View } from "react-native";
import { ItemDetailModal } from "./item-detail-modal";
import { Write } from "@/ui/text/write";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { ModalContextEnum } from "../domain/modal-context-enum";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { useDeleteCurrency } from "@/app/currency/hooks/useDeletecurrency";

export function CurrencyDetails({ currencyId }: { currencyId: string }) {
  const color = useColor();
  const { currency, isLoading, error } = useGetCurrencyDetails({ currencyId });
  const { closeDetailsModal, context: contextModal } = useDetailsModalContext();
  const { openToBeSureModal, onConfirm } = useToBeSureModalContext();
  const { deleteCurrency } = useDeleteCurrency();

  return (
    <View>
      {contextModal === ModalContextEnum.CurrencyDetails && (
        <DetailsModal>
          {isLoading && <SimpleLoading />}
          {error && <Text>{error?.message}</Text>}
          {currency && (
            <View>
              <View style={{ paddingBlock: 10 }}>
                <SimpleTitle text={`Moneda: ${currency.name}`}></SimpleTitle>
              </View>
              <View style={{ paddingBlock: 10, paddingInline: 20 }}></View>
              <View style={{ padding: 10 }}>
                <ItemDetailModal>
                  <Write text="Nombre" fontSize={16} />
                  <Write text={currency.name} fontSize={16} />
                </ItemDetailModal>
                <ItemDetailModal>
                  <Write text="Abrreviación" fontSize={16} />
                  <Write text={currency.abbr} fontSize={16} />
                </ItemDetailModal>
                <ItemDetailModal>
                  <Write text="Valor" fontSize={16} />
                  <Write
                    text={Number(currency.value).toFixed(2)}
                    fontSize={16}
                  />
                </ItemDetailModal>
                <ItemDetailModal>
                  <Write text="Moneda Principal" fontSize={16} />
                  <Write text={currency.primary ? "Si" : "No"} fontSize={16} />
                </ItemDetailModal>
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
                  textStyle={{ width: 100, textAlign: "center" }}
                  buttonColor={currency.primary ? color.secondary : color.error}
                  title="Eliminar"
                  disabled={currency.primary}
                  onPress={() => {
                    onConfirm(async () => {
                      await deleteCurrency(currencyId);
                      closeDetailsModal();
                    });
                    openToBeSureModal(ModalContextEnum.CurrencyDelete);
                  }}
                />
              </View>
            </View>
          )}
        </DetailsModal>
      )}
    </View>
  );
}
