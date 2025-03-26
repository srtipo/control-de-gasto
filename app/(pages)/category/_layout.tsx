import { Stack } from "expo-router";

export default function CategoryLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="add-category/index"
        options={{ title: "Añadir categoría" }}
      />
    </Stack>
  );
}
