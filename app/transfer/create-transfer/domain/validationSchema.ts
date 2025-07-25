import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  from: Yup.string().required("Debe seleccionar una cuenta"),
  to: Yup.string().required("Debe seleccionar una cuenta"),
  fee: Yup.array().of(
    Yup.object().shape({
      feeType: Yup.string().required("Debe seleccionar un tipo de cuota"),
      feeAccount: Yup.string().required("Debe seleccionar un tipo de cuota"),
      feeValue: Yup.number().required("Debe ingresar una cuota"),
    })
  ),
  toAmount: Yup.number()
    .required("Debe ingresar un monto")
    .min(0.01, "Debe ingresar un monto mayor a  0.00"),
  fromAmount: Yup.number()
    .required("Debe ingresar un monto")
    .min(0.01, "Debe ingresar un monto mayor a  0.00"),
  description: Yup.string().required("Debe ingresar una descripción"),
});
