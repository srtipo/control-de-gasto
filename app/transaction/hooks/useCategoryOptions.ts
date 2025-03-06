import { ISelectListOption } from "@/ui/select-list/select-list";
import { useEffect, useState } from "react";
import { useGetCategoryList } from "./useGetCategoryList";

export function useCategoryOptions(type: string) {
  const { categoryList, isLoading } = useGetCategoryList({ type });
  const [categoryOptions, setCategoryOptions] = useState<ISelectListOption[]>(
    []
  );

  useEffect(() => {
    if (isLoading) return;
    setCategoryOptions(
      categoryList.map((category) => ({
        label: category.name,
        value: category.id,
      }))
    );
  }, [categoryList, isLoading]);

  return categoryOptions;
}
