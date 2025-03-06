import React, { createContext, useContext, useState } from "react";
import { TransactionResponse } from "../hooks/useAccountHistory";

const TransactionListContext = createContext<{
  transactionList: TransactionResponse;
  updateTransactionList: (
    callBack: (
      prevState: TransactionResponse
    ) => TransactionResponse | TransactionResponse
  ) => void;
}>({
  transactionList: {
    data: [],
    page: 1,
  },
  updateTransactionList: (callBack: any) => {},
});

export function TransactionListProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactionList, setTransactionList] = useState<TransactionResponse>({
    data: [],
    page: 1,
  });

  const updateTransactionList = (
    callBack: (
      prevState: TransactionResponse
    ) => TransactionResponse | TransactionResponse
  ) => {
    setTransactionList(callBack);
  };

  return (
    <TransactionListContext.Provider
      value={{ transactionList, updateTransactionList }}
    >
      {children}
    </TransactionListContext.Provider>
  );
}

export const useTransactionListContext = () =>
  useContext(TransactionListContext);
