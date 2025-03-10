import { useDeleteRequest } from "@/app/Api-request/hooks/use-delete-request";

export function useDeleteAccount() {
  const endpoint = "/accounts";
  const onSuccess = (data: any) => {
    console.log("delete", data);
  };

  const { mutateAsync, ...restProps } = useDeleteRequest({
    onSuccess,
  });
  const deleteAccount = (accountId: string): Promise<any> => {
    return mutateAsync(endpoint.concat(`/${accountId}`));
  };
  return { deleteAccount, ...restProps };
}
