import { AccountTypeEnum } from "@/enums/account-type-enum";
export interface IGetAccountDetailsResponse {
  id: string;
  name: string;
  currency: {
    id: string;
    name: string;
    abbr: string;
    user: string;
    value: number;
    primary: boolean;
  };
  balance: number;
  description: string;
  accountType: AccountTypeEnum;
}
