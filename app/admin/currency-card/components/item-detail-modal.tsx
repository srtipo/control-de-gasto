import { View } from "react-native";

export function ItemDetailModal({ children }: { children: React.ReactNode }) {
  return (
    <View
      style={{
        paddingBlock: 10,
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      {children}
    </View>
  );
}
