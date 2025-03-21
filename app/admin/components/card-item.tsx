import { useColor } from "@/theme/hooks/useColor";
import { ListButton } from "@/ui/buttons/list-button";
import { SvgButton } from "@/ui/buttons/svg-buttom";
import EditSvg from "@/ui/svg/edit-svg";
import TrashcanSvg from "@/ui/svg/trashcan-svg";

import { View } from "react-native";

export function CardItem({
  children,
  onPress,
  onDelete,
  onEdit,
  deleteDisabled = false,
}: {
  children: React.ReactNode;
  deleteDisabled?: boolean;
  onPress: () => void;
  onDelete?: () => void;
  onEdit?: () => void;
}) {
  const color = useColor();
  return (
    <View style={{ paddingTop: 8 }}>
      <ListButton onPress={onPress}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {children}
          <View style={{ flexDirection: "row" }}>
            <SvgButton onPress={() => {}}>
              <EditSvg color={color.primary} />
            </SvgButton>
            <SvgButton
              disabled={deleteDisabled}
              onPress={() => {
                onDelete?.();
              }}
            >
              <TrashcanSvg
                color={deleteDisabled ? color.secondary : color.error}
                height={20}
                width={20}
              />
            </SvgButton>
          </View>
        </View>
      </ListButton>
    </View>
  );
}
