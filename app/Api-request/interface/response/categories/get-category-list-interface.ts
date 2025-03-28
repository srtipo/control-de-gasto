import { TransactionTypeEnum } from "@/enums/transaction-type-enum";
export interface GetCategoryListInterface {
  id: string;
  name: string;
  type: TransactionTypeEnum;
  description?: string;
}
[];
