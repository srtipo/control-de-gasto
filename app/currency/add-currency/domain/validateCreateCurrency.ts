import * as Yup from "yup";

export const validateCreateCurrency = Yup.object().shape({
  name: Yup.string().required("Required").max(20, "Max 20 characters"),
  abbr: Yup.string().required("Required").max(3, "Max 3 characters"),
  symbol: Yup.string().required("Required").max(3, "Max 3 characters"),
  primary: Yup.boolean().required("Required"),
  value: Yup.number().required("Required").min(0.001, "Min 0.001"),
});
