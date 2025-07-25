import { AccountTypeEnum } from "@/enums/account-type-enum";
export interface IGetAccountDetailsResponse {
  id: string;
  name: string;
  currency: {
    id: string;
    name: string;
    symbol: string;
    user: string;
    value: number;
    primary: boolean;
    abbr: string;
  };
  balance: number;
  description: string;
  accountType: AccountTypeEnum;
}
