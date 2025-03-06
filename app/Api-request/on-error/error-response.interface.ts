export interface IApiErrorResponse {
  code?: ApiErrorCode;
  message:
    | string
    | {
        validation: string;
        code: string;
        message: string;
      }[];
}
enum ApiErrorCode {
  "VALIDATION_ERROR" = "VALIDATION_ERROR",
}
