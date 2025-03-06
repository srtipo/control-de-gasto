import { Text, View } from "react-native";
import { ITransaction } from "../../hooks/useAccountHistory";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { useTransactionDetailModal } from "./transaction-detail-modal-provider";
import { useColor } from "@/theme/hooks/useColor";
import { formatToMoney } from "@/tools/money/FormatToMoney";
import { DescriptionItems } from "./description-items";
import { getDateString } from "@/tools/getDateString";
import { getDateStringFromDate } from "@/tools/getDateStringFromDate";
import { getTimeFromDate } from "@/tools/getTimeFromDate";
import { transactionTypeTraslation } from "@/tools/transaction-type/transactionTypeTraslation";
import { SecundaryButton } from "@/ui/buttons/secundaryButtom";
import { DeleteTransactionModal } from "./delete-transaction-modal";
import { useState } from "react";

export function TransactionDetailModalContent() {
  const { data } = useTransactionDetailModal();
  const [alertDelete, setAlertDelete] = useState(false);
  const color = useColor();
  if (!data) return <View></View>;
  return (
    <View style={{ padding: 20 }}>
      <View>
        <Text
          style={{
            color: color.text,
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            paddingBlock: 5,
          }}
        >
          {data.description}
        </Text>
      </View>
      <View style={{ paddingBlock: 10 }}>
        <DescriptionItems
          item="Fecha"
          value={getDateStringFromDate(data.date)}
        />
        <DescriptionItems item="Hora" value={getTimeFromDate(data.date)} />

        <DescriptionItems
          item="Monto"
          value={formatToMoney(data.amount, data.currency.abbr)}
        />
        <DescriptionItems item="Moneda" value={data.currency.name} />
        <DescriptionItems
          item="Tipo"
          value={transactionTypeTraslation(data.type)}
        />
        <DescriptionItems item="Categoría" value={data.category.name} />
      </View>
      <View style={{ paddingBlock: 10 }}>
        <SecundaryButton
          title="Eliminar"
          onPress={() => {
            setAlertDelete(true);
          }}
        />
      </View>
      <DeleteTransactionModal
        state={[alertDelete, setAlertDelete]}
        id={data.id}
      />
    </View>
  );
}
