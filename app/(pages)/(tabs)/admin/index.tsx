import { AccountCard } from "@/app/admin/account-card/components/account-card";
import { AddAccountButton } from "@/app/admin/account-card/components/add-account-button";
import { CategorieCard } from "@/app/admin/components/categorie-card";

import { TableTitleCard } from "@/app/admin/components/table-title-card";
import { CurrencyCard } from "@/app/admin/currency-card/components/currency-card";
import { AddCurrencyButton } from "@/app/currency/components/add-currency-button";
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
        <View
          style={{
            paddingBlock: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingInline: 20,
              paddingBlock: 5,
            }}
          >
            <View style={{ width: 30 }}></View>
            <SimpleTitle text="Cuentas"></SimpleTitle>
            <AddAccountButton />
          </View>
          <AccountCard
            table={
              <TableTitleCard key="AccountCard" items={["Nombre", "Tipo"]} />
            }
          />
        </View>
        <View style={{ paddingBlock: 10 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingInline: 20,
              paddingBlock: 5,
            }}
          >
            <View style={{ width: 30 }}></View>
            <SimpleTitle text="Monedas"></SimpleTitle>
            <AddCurrencyButton />
          </View>
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
