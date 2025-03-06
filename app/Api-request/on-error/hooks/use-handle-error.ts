import { router } from "expo-router";
import { IApiErrorResponse } from "../error-response.interface";
import { getErrorMessage } from "../get-error-message";
import { useSession } from "@/app/auth/session.provider";

export const useHandleError = async (status: number, response: any) => {
  if (status === 404) {
    throw new Error(
      getErrorMessage({
        message: "Not found",
      })
    );
  }
  if (status === 401) {
    throw new Error("Unauthorized");
  }

  if (status === 500) {
    throw new Error(
      getErrorMessage({
        message: "Internal server error",
      })
    );
  }

  const error: IApiErrorResponse = await response.json();
  throw new Error(getErrorMessage({ message: error.message }));
};
