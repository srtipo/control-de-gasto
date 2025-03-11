import { useColor } from "@/theme/hooks/useColor";
import { Pressable, Text, View } from "react-native";
import { MainButton } from "@/ui/buttons/main-button";
import { AddButton } from "@/ui/buttons/add-buttom";
import { SimpleCard } from "@/ui/cards/simple-card";
import { router } from "expo-router";
import { formatToMoney } from "@/tools/money/FormatToMoney";
import { useAccountDetails } from "../hooks/useAccountDetails";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { useSubscription } from "@/app/Api-request/subscription-Provider";
import { IAccount } from "@/app/Api-request/interface/response/accounts/get-account-list";

export function AccountCard({ name, balance, id, accountType }: IAccount) {
  const color = useColor();
  const { reLoadQuery } = useSubscription();
  const { account, isLoading, error } = useAccountDetails({ accountId: id });
  const handleLongPress = () => {
    console.log("long press");
  };
  return (
    <SimpleCard>
      {isLoading && <SimpleLoading />}
      {error && <Text>{error?.message}</Text>}
      {account && (
        <View style={{ padding: 5 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <View
              style={{
                maxWidth: "38%",
              }}
            >
              <Text
                numberOfLines={2}
                style={{
                  color: color.text,
                  fontSize: 20,
                }}
              >
                {name}
              </Text>
            </View>
            <View style={{ maxWidth: "60%" }}>
              <Text
                numberOfLines={2}
                style={{
                  color: color.text,
                  fontSize: 20,
                  wordWrap: "break-word",
                }}
              >
                {formatToMoney(balance, account.currency.abbr)}
              </Text>
            </View>
          </View>
          <View style={{ padding: 10 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
                paddingBlock: 10,
              }}
            >
              <Text
                style={{ color: color.text, fontSize: 15 }}
              >{`Moneda: ${account.currency.name}`}</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{ color: color.text, fontSize: 15 }}
              >{`Tipo de cuenta: ${accountType}`}</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ width: "80%", paddingRight: 10 }}>
              <MainButton
                title="Ver Historial"
                onPress={() => {
                  reLoadQuery();
                  router.push(`/account/history/${id}`);
                }}
              />
            </View>
            <AddButton
              onPress={() => {
                router.push(`/home/addTransaction?accountId=${id}`);
              }}
              size={70}
            ></AddButton>
          </View>
        </View>
      )}
    </SimpleCard>
  );
}
