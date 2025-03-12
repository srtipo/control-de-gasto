import { useDeleteRequest } from "@/app/Api-request/hooks/use-delete-request";

export function useDeleteCurrency() {
  const { mutateAsync } = useDeleteRequest({});
  const deleteCurrency = async (id: string) => {
    const { data, isLoading, error, ...restProps } = await mutateAsync(
      `/currencies/${id}`
    );
    return { data, isLoading, error, restProps };
  };
  return { deleteCurrency };
}
