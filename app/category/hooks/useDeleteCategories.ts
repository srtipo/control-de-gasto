import { useDeleteRequest } from "@/app/Api-request/hooks/use-delete-request";

export function useDeleteCategory({
  onSuccess,
  onError,
}: {
  onSuccess?: (data: any) => void;
  onError?: (error: any) => void;
}) {
  const success = (data: any) => {
    onSuccess && onSuccess(data);
  };
  const error = (error: any) => {
    onError && onError(error);
  };
  const { mutate } = useDeleteRequest({ onSuccess: success, onError: error });
  return {
    deleteCategory: async (categoryId: string) => {
      mutate(`/transactions/categories/${categoryId}`);
    },
  };
}
