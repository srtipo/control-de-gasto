import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { GetCategoryDetailsInterface } from "@/app/Api-request/interface/response/categories/get-category-details-interface";

export function useGetCategoryDetails({ categoryId }: { categoryId: string }) {
  const { data, isLoading, error, ...restProps } = useGetRequest(
    ["GET_CATEGORY_DETAILS", categoryId],
    `/transactions/categories/${categoryId}`
  );
  return {
    categoryDetails: data as GetCategoryDetailsInterface,
    isLoading,
    error,
    restProps,
  };
}
