import { Text, View } from "react-native";
import { ITransaction } from "../hooks/useAccountHistory";
import { Transaction } from "../transaction";
import { useColor } from "@/theme/hooks/useColor";
import { toRelativeDates } from "@/tools/toRelativeDates";
import { MainButton } from "@/ui/buttons/main-button";

export function TransactionsContainer({
  transaction,
  date,
}: {
  transaction: ITransaction[];
  date: string;
}) {
  const color = useColor();
  return (
    <View style={{ paddingBlock: 5 }} key={date}>
      <Text
        style={{
          color: color.secondary,
          fontWeight: "bold",
          fontSize: 20,
          paddingBlock: 5,
          paddingInline: 10,
        }}
      >
        {toRelativeDates(date)}
      </Text>
      {transaction.map((item) => {
        return (
          <View key={item.id}>
            <Transaction
              amount={item.amount}
              date={item.date}
              type={item.type}
              currency={item.currency}
              id={item.id}
              description={item.description}
              category={item.category}
            />
          </View>
        );
      })}
    </View>
  );
}
