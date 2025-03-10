import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { GetCategoryListInterface } from "@/app/Api-request/interface/response/categories/get-category-list-interface";

export function useGetCategories() {
  const { data, isLoading, error, ...restProps } = useGetRequest(
    ["GET_CATEGORY"],
    "/transactions/categories"
  );
  return {
    categories: data as GetCategoryListInterface,
    isLoading,
    error,
    restProps,
  };
}
