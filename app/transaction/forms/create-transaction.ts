import * as Yup from "yup";
import { TransactionTypeEnum } from "@/enums/transaction-type-enum";

export const createTransactionSchema = Yup.object().shape({
  accountId: Yup.string().required("Required").length(24, "Invalid account id"),
  category: Yup.string().required("Required").length(24, "Invalid account id"),
  type: Yup.mixed()
    .oneOf(Object.values(TransactionTypeEnum))
    .required("Required"),
  amount: Yup.number().required("Required").min(0.001, "Min 0.001"),
  description: Yup.string().required("Required"),
  time: Yup.object({
    hour: Yup.number().required("Required"),
    minute: Yup.number().required("Required"),
  }),
  date: Yup.object({
    year: Yup.number().required("Required"),
    month: Yup.number().required("Required"),
    day: Yup.number().required("Required"),
  }),
});
