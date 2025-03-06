import { AccountTypeEnum } from "@/enums/account-type-enum";
import { ISelectListOption } from "@/ui/select-list/select-list";
import { translateAccountType } from "../../domain/translateAccountType";

export function getAccountTypeOptions(): ISelectListOption[] {
  return Object.values(AccountTypeEnum).map((value) => {
    return {
      value,
      label: translateAccountType(value),
    };
  });
}
