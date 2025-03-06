import { useColor } from "@/theme/hooks/useColor";
import { Pressable, Text, View } from "react-native";
import AddSvg from "../svg/add-svg";
import { Children } from "react";
import { ExternalPathString, Link, RelativePathString } from "expo-router";

export function AddButton({
  onPress,
  link,
  size = 40,
  ...props
}: {
  onPress?: () => void;
  children?: React.ReactNode;
  size?: number;
  link?: RelativePathString | ExternalPathString;
  [key: string]: any;
}) {
  const { primary: colorPrimary, textButton: textColor, shadow } = useColor();
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            boxShadow: pressed
              ? `2px 2px 2px ${shadow}`
              : `4px 8px 8px ${shadow}`,
          },
          props.disabled
            ? {
                opacity: 0.5,
              }
            : { opacity: pressed ? 0.8 : 1 },
          {
            padding: 10,
            borderRadius: 100,
            alignItems: "center",
            justifyContent: "center",
            width: size,
            height: size,
          },
        ]}
        onPress={() => {
          onPress ? onPress() : () => {};
        }}
        {...props}
      >
        <AddSvg width={size} height={size} color={colorPrimary} />
      </Pressable>
    </View>
  );
}
