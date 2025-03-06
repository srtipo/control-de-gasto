import { useMutation } from "@tanstack/react-query";
import { IApiErrorResponse } from "@/app/Api-request/on-error/error-response.interface";
import { getErrorMessage } from "@/app/Api-request/on-error/get-error-message";
import { useContext } from "react";
import { useSession } from "../../auth/session.provider";
import { router, useNavigation } from "expo-router";

export const useLogin = () => {
  const { signIn } = useSession();
  const {
    mutate: loginQuery,
    isPending,
    error,
  } = useMutation({
    mutationFn: loginRequets,
    onSuccess: (data) => {
      signIn(data.token);
      console.log("retornando a la index");
      router.replace("../");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return { loginQuery, isPending, error };
};

async function loginRequets({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({ email, password });

  const response = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/login`, {
    method: "POST",
    headers: myHeaders,
    body: raw,
  });
  if (!response.ok) {
    const error: IApiErrorResponse = await response.json();
    throw new Error(getErrorMessage(error));
  }

  return response.json();
}
