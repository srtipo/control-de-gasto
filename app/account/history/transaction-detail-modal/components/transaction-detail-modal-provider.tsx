import React, { createContext, useContext, useState } from "react";
import { ITransaction } from "../../hooks/useAccountHistory";

const TransactionDetailModalContext = createContext<{
  isVisible: boolean;
  showModal: () => void;
  closeModal: () => void;
  data: ITransaction | null;
  setData: (data: ITransaction) => void;
}>({
  isVisible: false,
  showModal: () => {},
  closeModal: () => {},
  data: null,
  setData: () => {},
});

export function TransactionDetailModalProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<ITransaction | null>(null);

  const showModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return (
    <TransactionDetailModalContext.Provider
      value={{
        isVisible,
        showModal,
        closeModal,
        data,
        setData,
      }}
    >
      {children}
    </TransactionDetailModalContext.Provider>
  );
}

export const useTransactionDetailModal = () =>
  useContext(TransactionDetailModalContext);
