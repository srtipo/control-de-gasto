import { getTimeFromDate } from "@/tools/getTimeFromDate";
import { ListButton } from "@/ui/buttons/list-button";
import { Text, View } from "react-native";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { useColor } from "@/theme/hooks/useColor";
import { toPartialText } from "@/tools/text/ToPartialText";
import { formatToMoney } from "@/tools/money/FormatToMoney";
import { useTransactionDetailModal } from "./transaction-detail-modal/components/transaction-detail-modal-provider";
import { ITransaction } from "./hooks/useAccountHistory";

export function Transaction({
  amount,
  date,
  currency,
  type,
  id,
  description,
  category,
}: ITransaction) {
  const { setData, showModal } = useTransactionDetailModal();
  const color = useColor();
  const time = getTimeFromDate(date);
  const colorByTransactionType =
    type === TransactionTypeEnum.INCOME ? color.success : color.error;

  const descriptionText = toPartialText(description, 10);
  const categoryText = toPartialText(category.name, 10);

  return (
    <View style={{ marginBottom: 10, width: "100%" }}>
      <ListButton
        onPress={() => {
          showModal();
          setData({
            id,
            amount,
            date,
            description,
            currency,
            type,
            category,
          });
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              width: "25%",
              textAlign: "center",
              color: color.text,
            }}
          >
            {descriptionText}
          </Text>
          <Text
            style={{
              width: "20%",
              textAlign: "center",
              color: color.text,
            }}
          >
            {time}
          </Text>
          <Text
            style={{
              width: "25%",
              textAlign: "center",
              color: colorByTransactionType,
            }}
          >
            {categoryText}
          </Text>

          <Text
            style={{
              color: colorByTransactionType,
              width: "30%",
              textAlign: "center",
            }}
          >
            {formatToMoney(amount, currency.abbr)}
          </Text>
        </View>
      </ListButton>
    </View>
  );
}
