import * as yup from "yup";

export const createCategoryFormValidation = yup.object().shape({
  name: yup.string().required("Es necesario").max(20, "Maximo 20 caracteres"),
  description: yup.string().max(40, "Maximo 40 caracteres"),
  type: yup.string().required("Es necesario"),
});
