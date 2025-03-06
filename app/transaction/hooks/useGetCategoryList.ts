import { useGetRequest } from "@/app/Api-request/hooks/use-get-request";
import { GetCategoryListInterface } from "@/app/Api-request/interface/response/get-category-list-interface";

export function useGetCategoryList({ type }: { type?: string }) {
  const { data, error, isLoading } = useGetRequest(
    ["GET_CATEGORY", type || ""],
    `/transactions/categories?type=${type}`
  );
  const categoryList: GetCategoryListInterface[] = data;
  return { categoryList, error, isLoading };
}
