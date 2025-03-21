import { Stack } from "expo-router";

export default function CurrencyLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="add-currency/index"
        options={{ title: "Añadir moneda" }}
      />
    </Stack>
  );
}
