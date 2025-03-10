import { AccountTypeEnum } from "@/enums/account-type-enum";

export interface IAccount {
  id: string;
  name: string;
  currency: string;
  balance: number;
  description: string;
  accountType: AccountTypeEnum;
}
