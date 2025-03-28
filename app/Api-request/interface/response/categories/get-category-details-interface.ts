import { TransactionTypeEnum } from "@/enums/transaction-type-enum";

export interface GetCategoryDetailsInterface {
  id: string;
  name: string;
  type: TransactionTypeEnum;
  description?: string;
}
