import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
import { getDateString } from "@/tools/getDateString";

export const createtransactionFormInitialValue = () => {
  const { date, time } = getDateString();
  return {
    accountId: "",
    category: "",
    type: TransactionTypeEnum.EXPENSE,
    amount: 0,
    description: "",
    time: time,
    date: date,
  };
};
