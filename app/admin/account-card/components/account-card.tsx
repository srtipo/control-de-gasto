import { useGetAccounts } from "@/app/home/hooks/use-get-acoounts";
import { useColor } from "@/theme/hooks/useColor";
import { SimpleCard } from "@/ui/cards/simple-card";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { ScrollView, Text, View } from "react-native";
import { CardItem } from "../../components/card-item";
import React, { useState } from "react";
import { AccountDetails } from "./accountDetails";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { DeleteConfirmModal } from "./delete-confirm-modal";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { Write } from "@/ui/text/write";
import { useDeleteAccount } from "@/app/account/hooks/useDeleteAccount";

export function AccountCard({ table }: { table: React.ReactNode }) {
  const color = useColor();
  const { data, isLoading, refetch } = useGetAccounts();
  const { setIsVisible } = useDetailsModalContext();
  const { openToBeSureModal, onConfirm } = useToBeSureModalContext();
  const [selectedAccount, setSelectedAccount] = useState<string | null>(null);
  const { deleteAccount } = useDeleteAccount();

  const onPress = (account: string) => {
    setIsVisible(true);
    setSelectedAccount(account);
  };

  return (
    <View style={{ paddingTop: 5 }}>
      <SimpleCard maxHeight={300}>
        {isLoading && <SimpleLoading />}
        {table}
        <ScrollView nestedScrollEnabled={true}>
          <View style={{ paddingBlock: 2 }}>
            {data?.length === 0 && (
              <Write
                style={{ textAlign: "center" }}
                text="No tienes cuentas aún"
              ></Write>
            )}
            {data?.map((account) => (
              <CardItem
                key={account.id}
                onPress={() => onPress(account.id)}
                onDelete={() => {
                  openToBeSureModal();
                  onConfirm(async () => {
                    deleteAccount(account.id).then(refetch);
                  });
                }}
              >
                <View
                  style={{
                    width: "70%",
                    justifyContent: "space-around",
                    flexDirection: "row",
                  }}
                >
                  <Text
                    numberOfLines={1}
                    style={{
                      width: "35%",
                      color: color.text,
                      textAlign: "center",
                    }}
                  >
                    {account.name}
                  </Text>
                  <Text
                    numberOfLines={1}
                    style={{
                      width: "35%",
                      color: color.text,
                      textAlign: "center",
                    }}
                  >
                    {account.accountType}
                  </Text>
                </View>
              </CardItem>
            ))}
            <View style={{ paddingBlock: 5 }}></View>
          </View>
        </ScrollView>
      </SimpleCard>
      {selectedAccount && <AccountDetails accountId={selectedAccount} />}
      {}
      <DeleteConfirmModal refetch={refetch} />
    </View>
  );
}
