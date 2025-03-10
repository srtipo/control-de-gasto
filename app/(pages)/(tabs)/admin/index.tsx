import { AccountCard } from "@/app/admin/account-card/components/account-card";
import { CategorieCard } from "@/app/admin/components/categorie-card";
import { CurrencyCard } from "@/app/admin/components/currency-card";
import { TableTitleCard } from "@/app/admin/components/table-title-card";
import { useColor } from "@/theme/hooks/useColor";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { ScrollView, Text, View } from "react-native";

export default function Admin() {
  const color = useColor();
  return (
    <View
      style={{
        backgroundColor: color.background,
        flex: 1,
        paddingBlock: 10,
      }}
    >
      <ScrollView>
        <View style={{ paddingBlock: 10 }}>
          <SimpleTitle text="Cuentas"></SimpleTitle>
          <AccountCard
            table={
              <TableTitleCard key="AccountCard" items={["Nombre", "Tipo"]} />
            }
          />
        </View>
        <View style={{ paddingBlock: 10 }}>
          <SimpleTitle text="Monedas"></SimpleTitle>
          <CurrencyCard
            table={
              <TableTitleCard
                key="CurrencyCard"
                items={["Nombre", "Abrreviación"]}
              />
            }
          />
        </View>
        <View style={{ paddingBlock: 10 }}>
          <SimpleTitle text="Categorías"></SimpleTitle>
          <CategorieCard
            table={
              <TableTitleCard key="CategorieCard" items={["Nombre", "Tipo"]} />
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
