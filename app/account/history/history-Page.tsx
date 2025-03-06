import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { useColor } from "@/theme/hooks/useColor";
import { ScreenCard } from "@/ui/cards/screen-card";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { useLocalSearchParams } from "expo-router";
import { Modal, Text, View } from "react-native";
import { TransactionList } from "./transaction-list";
import { TableTitle } from "./components/table-title";
import { TransactionDescriptionModal } from "./transaction-detail-modal/components/transactin-description-modal";
import { TransactionDetailModalProvider } from "./transaction-detail-modal/components/transaction-detail-modal-provider";
import { TransactionListProvider } from "./components/transaction-list-provider";
export default function HistoryPage() {
  const color = useColor();
  const { id } = useLocalSearchParams();
  const accountId: string = typeof id === "string" ? id : "";
  const { account, isLoading, error } = useAccountDetails({
    accountId,
  });
  return (
    <TransactionListProvider>
      <TransactionDetailModalProvider>
        <View
          style={{ flex: 1, paddingTop: 30, backgroundColor: color.background }}
        >
          {isLoading && <Text>Loading...</Text>}
          {error && <Text>{error?.message}</Text>}
          {account && (
            <ScreenCard>
              <SimpleTitle
                text={`Cuenta: ${account.name}`}
                color={color.textOnCard}
              />
              <Text style={{ color: color.textOnCard, fontSize: 25 }}>
                {error?.message}
              </Text>
              <View style={{ paddingBlock: 5 }}>
                <TableTitle />
              </View>
              <TransactionList accountId={account.id} />
            </ScreenCard>
          )}
          <TransactionDescriptionModal />
        </View>
      </TransactionDetailModalProvider>
    </TransactionListProvider>
  );
}
