import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";
import { Write } from "@/ui/text/write";

export function FormItem({
  label,
  children,
  error,
}: {
  label: string;
  children: React.ReactNode;
  error?: string;
}) {
  const color = useColor();
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <View style={{ paddingInline: 5 }}>
        <Write text={label} fontSize={16}></Write>
      </View>
      <View style={{ paddingInline: 5 }}>
        {children}
        {error && <Write text={error} style={{ color: color.error }}></Write>}
      </View>
    </View>
  );
}
