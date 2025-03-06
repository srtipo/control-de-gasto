import { IApiErrorResponse } from "./error-response.interface";

export const getErrorMessage = (error: IApiErrorResponse | null) => {
  if (!error) {
    return "";
  }
  if (typeof error.message === "string") {
    return error.message;
  }
  return error.message[0].message;
};
