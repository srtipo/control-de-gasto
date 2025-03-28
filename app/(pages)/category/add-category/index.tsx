import { CreateCategoryForm } from "@/app/category/add-category/components/create-category-form";
import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";

export default function AddCategory() {
  const color = useColor();
  return (
    <View
      style={{
        backgroundColor: color.background,
        flex: 1,
        padding: 20,
      }}
    >
      <CreateCategoryForm />
    </View>
  );
}
