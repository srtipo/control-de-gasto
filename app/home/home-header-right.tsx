import { Text, View } from "react-native";
import { useGetBalance } from "./hooks/use-get-balance";
import { useColor } from "@/theme/hooks/useColor";
import { formatToMoney } from "@/tools/money/FormatToMoney";

export default function HomeHeaderRiht() {
  const { data, isLoading, error } = useGetBalance();
  const color = useColor();
  return (
    <View>
      <Text style={{ color: color.text }}>
        {isLoading && "Loading..."}
        {error && error?.message}
        {data &&
          `Balance: ${formatToMoney(data.TotalAmount, data.currency.abbr)}`}
      </Text>
    </View>
  );
}
