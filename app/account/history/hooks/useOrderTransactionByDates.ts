import {
  ITransaction,
  TransactionResponse,
  TransactionResponseWithFilteredDates,
} from "./useAccountHistory";
import { getDateStringFromDate } from "@/tools/getDateStringFromDate";
import { filterDuplicates } from "@/tools/arrays/filterDuplicates";

export function orderTransactionByDates(
  transactions: TransactionResponse["data"]
) {
  const dates = transactions?.map((item) => getDateStringFromDate(item.date));
  const orderedTransactions = orderTransactionsByDate(
    transactions,
    filterDuplicates(dates)
  );

  return orderedTransactions as TransactionResponseWithFilteredDates;
}

const orderTransactionsByDate = (
  transactions: ITransaction[],
  dateList: string[]
) => {
  let orderedTransactions: TransactionResponseWithFilteredDates = [];
  dateList.forEach((date) => {
    const transaction = transactions.filter(
      (a) => getDateStringFromDate(a.date) === date
    );
    orderedTransactions.push({ date, data: transaction });
  });
  return orderedTransactions;
};
