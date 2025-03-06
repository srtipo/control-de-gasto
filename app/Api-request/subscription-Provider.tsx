import { useContext, createContext, useState } from "react";

const SubscriptionContext = createContext<{
  reLoadQuery: () => void;
  getKey: () => string;
}>({
  reLoadQuery: () => {},
  getKey: () => "0",
});

export function SubscriptionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [transactions, setTransactions] = useState<number>(0);
  const reLoadQuery = () => {
    setTransactions((prevTransaction: number) => prevTransaction + 1);
  };

  const getKey = () => transactions.toString();

  return (
    <SubscriptionContext.Provider value={{ reLoadQuery, getKey }}>
      {children}
    </SubscriptionContext.Provider>
  );
}

export function useSubscription() {
  const context = useContext(SubscriptionContext);
  if (context === undefined) {
    throw new Error(
      "useSubscription must be used within a SubscriptionProvider"
    );
  }
  return context;
}
