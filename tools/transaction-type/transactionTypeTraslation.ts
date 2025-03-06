import { TransactionTypeEnum } from "@/enums/transaction-type-enum";

export function transactionTypeTraslation(
  transactionType: TransactionTypeEnum
) {
  switch (transactionType) {
    case TransactionTypeEnum.EXPENSE:
      return "Gasto";
    case TransactionTypeEnum.INCOME:
      return "Ingreso";
  }
}
