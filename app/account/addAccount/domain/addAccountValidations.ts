import * as Yup from "yup";
import { AccountTypeEnum } from "@/enums/account-type-enum";

export const accountSchema = Yup.object().shape({
  name: Yup.string()
    .required("Campo requerido")

    .max(25, "El nombre no puede superar los 25 caracteres"),
  accountType: Yup.mixed()
    .oneOf(Object.values(AccountTypeEnum))
    .required("Required"),
  balance: Yup.number()
    .required("Campo requerido")
    .min(0, "Debe ser positivo")
    .max(1000000000, "El saldo no puede superar los mil millones"),
  currency: Yup.string().required("Campo requerido"),
  description: Yup.string().required("Campo requerido"),
});
