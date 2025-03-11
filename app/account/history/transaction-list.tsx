import {
  TransactionResponse,
  TransactionResponseWithFilteredDates,
  useAccountHistory,
} from "./hooks/useAccountHistory";
import { RefreshControl, ScrollView, Text, View } from "react-native";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { TransactionsContainer } from "./components/transactions-container";
import { MainButton } from "@/ui/buttons/main-button";
import { useEffect, useState } from "react";
import { orderTransactionByDates } from "./hooks/useOrderTransactionByDates";
import { useTransactionListContext } from "./components/transaction-list-provider";
import { Write } from "@/ui/text/write";

export function TransactionList({ accountId }: { accountId: string }) {
  const [page, setPage] = useState(1);
  const { transaction, isLoading, error, refetch, isFetching } =
    useAccountHistory(accountId, page);
  const { transactionList: data, updateTransactionList: setData } =
    useTransactionListContext();
  const [transactionList, setTransactionList] =
    useState<TransactionResponseWithFilteredDates>([]);

  useEffect(() => {
    if (!transaction?.data) return;
    if (isLoading) return;
    setData((preTransaction) => {
      return {
        data: [...preTransaction.data, ...transaction?.data],
        page: transaction?.page,
      };
    });
  }, [page, isLoading]);
  const [showBottom, setShowBottom] = useState(false);

  useEffect(() => {
    if (transaction?.data?.length > 9) {
      setShowBottom(true);
    } else {
      setShowBottom(false);
    }
  }, [transaction, isFetching]);

  useEffect(() => {
    if (!data?.data) return;

    setTransactionList(orderTransactionByDates(data?.data));
  }, [data, isFetching]);

  useEffect(() => {
    console.log(transactionList.length);
  }, [transactionList]);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isFetching}
          onRefresh={() => {
            refetch();
            setData((preTransaction) => {
              return {
                data: [...transaction?.data],
                page: transaction?.page,
              };
            });
          }}
        ></RefreshControl>
      }
    >
      {error && <Text>{error?.message}</Text>}
      {transactionList?.length > 0 && (
        <View style={{ paddingBottom: 25 }}>
          {transactionList?.map((item) => {
            return (
              <TransactionsContainer
                key={item.date}
                transaction={item.data}
                date={item.date}
              />
            );
          })}
          {showBottom && !isLoading && (
            <MainButton
              title="Ver más"
              onPress={() => {
                setPage(page + 1);
              }}
            />
          )}
          {!showBottom && !isLoading && (
            <Text style={{ textAlign: "center" }}>
              no hay más transacciones
            </Text>
          )}
        </View>
      )}
      {isLoading && <SimpleLoading />}
      {transactionList?.length == 0 && !isLoading && (
        <View
          style={{
            paddingBlock: 10,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Write text="No hay transacciones"></Write>
        </View>
      )}
    </ScrollView>
  );
}
