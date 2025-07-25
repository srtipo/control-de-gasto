import * as Yup from "yup";

export const addFeeValidations = Yup.object().shape({
  feeType: Yup.string().required("Debe seleccionar un tipo de valor"),
  account: Yup.string().required("Debe seleccionar un tipo de valor"),
  feeValue: Yup.number().required("Debe ingresar una cuota"),
});
