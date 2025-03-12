import { useAccountDetails } from "@/app/account/hooks/useAccountDetails";
import { SimpleLoading } from "@/ui/loading/simple-loadiing";
import { DetailsModal } from "@/ui/modals/details-modal/details-modal";
import { SimpleTitle } from "@/ui/text/simple-titl";
import { Write } from "@/ui/text/write";
import { Text, View } from "react-native";
import { AccountDetailsModalItems } from "./account-details-modal-items";
import { SecundaryButton } from "@/ui/buttons/secundaryButtom";
import { useColor } from "@/theme/hooks/useColor";
import { useToBeSureModalContext } from "@/ui/modals/alert-modals/to-be-sure-modal-provider";
import { useDetailsModalContext } from "@/ui/modals/details-modal/details-modal-provider";
import { useDeleteAccount } from "@/app/account/hooks/useDeleteAccount";
import { useEffect, useState } from "react";
import { AccountModalContextEnum } from "../domain/account-modal-contex-enum";

export function AccountDetails({ accountId }: { accountId: string }) {
  const context = AccountModalContextEnum.AccountDetails;
  const [visible, setVisible] = useState(false);
  const color = useColor();
  const { openToBeSureModal, onConfirm } = useToBeSureModalContext();
  const { closeDetailsModal, context: contextModal } = useDetailsModalContext();
  const { deleteAccount } = useDeleteAccount();
  const { account, isLoading, error } = useAccountDetails({
    accountId,
  });

  useEffect(() => {
    if (contextModal !== context) setVisible(false);
    else setVisible(true);
  }, [contextModal, context]);

  return (
    <View>
      {visible && (
        <DetailsModal>
          {isLoading && <SimpleLoading />}
          {error && <Text>{error?.message}</Text>}
          {account && (
            <View>
              <View style={{ paddingBlock: 10 }}>
                <SimpleTitle text={`Cuenta: ${account.name}`}></SimpleTitle>
              </View>
              <View style={{ paddingBlock: 10, paddingInline: 20 }}>
                <AccountDetailsModalItems>
                  <Write text="Moneda" fontSize={16} />
                  <Write text={account.currency.abbr} fontSize={16} />
                </AccountDetailsModalItems>
                <AccountDetailsModalItems>
                  <Write text="Tipo de cuenta" fontSize={16} />
                  <Write text={account.accountType} fontSize={16} />
                </AccountDetailsModalItems>
                <AccountDetailsModalItems>
                  <Write text="Balance" fontSize={16} />
                  <Write
                    text={Number(account.balance).toFixed(2)}
                    fontSize={16}
                  />
                </AccountDetailsModalItems>
                <View style={{ paddingBlock: 15 }}>
                  <Write
                    text={`Descripción: ${account.description}`}
                    fontSize={16}
                  />
                </View>
              </View>
              <View
                style={{
                  paddingBlock: 10,
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <SecundaryButton
                  textStyle={{ width: 100, textAlign: "center" }}
                  title="Editar"
                  onPress={() => {}}
                />
                <SecundaryButton
                  textStyle={{ width: 100, textAlign: "center" }}
                  buttonColor={color.error}
                  title="Eliminar"
                  onPress={() => {
                    onConfirm(async () => {
                      await deleteAccount(accountId);
                      closeDetailsModal();
                    });
                    openToBeSureModal(AccountModalContextEnum.AccountDelete);
                  }}
                />
              </View>
            </View>
          )}
        </DetailsModal>
      )}
    </View>
  );
}
