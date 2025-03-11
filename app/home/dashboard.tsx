import { FlatList, RefreshControl, ScrollView, Text, View } from "react-native";
import { useGetAccounts } from "./hooks/use-get-acoounts";
import { useColor } from "@/theme/hooks/useColor";
import { AddPrimaryButton } from "@/ui/buttons/add-primary-buttom";
import { AccountCard } from "../account/card/account-card";
import { router } from "expo-router";
import { EmptyDashboard } from "./components/empty-dashboard";

export function Dashboard() {
  const {
    data: accounts,
    isLoading,
    error,
    refetch,
    isFetching,
  } = useGetAccounts();
  const Colors = useColor();

  return (
    <View style={{ flexDirection: "column" }}>
      {isLoading && <Text>Loading...</Text>}
      {error && <Text>{error?.message}</Text>}
      {accounts?.length > 0 && !isFetching && (
        <View style={{ paddingBlock: 10 }}>
          <FlatList
            data={accounts}
            refreshControl={
              <RefreshControl
                refreshing={isFetching}
                onRefresh={() => {
                  refetch();
                }}
              ></RefreshControl>
            }
            renderItem={({ item }) => {
              return (
                <View
                  key={item.id}
                  style={{ paddingInline: 5, paddingBlock: 10 }}
                >
                  <AccountCard {...item} />
                </View>
              );
            }}
            ListFooterComponent={
              <View
                style={{
                  marginBlock: 10,
                  padding: 10,
                  backgroundColor: Colors.background,
                }}
              >
                <AddPrimaryButton
                  onclick={() => {
                    router.push("/(pages)/(tabs)/home/addAccount");
                  }}
                  text="Añadir cuenta"
                />
              </View>
            }
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
      {accounts?.length == 0 && <EmptyDashboard />}
    </View>
  );
}
