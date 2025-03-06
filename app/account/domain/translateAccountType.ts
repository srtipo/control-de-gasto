import { AccountTypeEnum } from "@/enums/account-type-enum";

export function translateAccountType(accountType: AccountTypeEnum) {
  switch (accountType) {
    case AccountTypeEnum.Banking:
      return "Bancaria";
    case AccountTypeEnum.Cash:
      return "Efectivo";
    case AccountTypeEnum.Credit:
      return "Crédito";
    case AccountTypeEnum.Investment:
      return "Inversión";
    case AccountTypeEnum.Salving:
      return "Ahorros";
    case AccountTypeEnum.OnlineBanking:
      return "Banco en línea";
    case AccountTypeEnum.cryptocurrency:
      return "Crypto";
    case AccountTypeEnum.Debt:
      return "Deuda";
    default:
      return "Bancaria";
  }
}
