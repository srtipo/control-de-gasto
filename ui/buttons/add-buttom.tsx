import { useColor } from "@/theme/hooks/useColor";
import { Pressable, View } from "react-native";
import AddSvg from "../svg/add-svg";
import { ExternalPathString, Link, RelativePathString } from "expo-router";

export function AddButton({
  onPress,
  link,
  size = 40,
  pressedShadow,
  unPressedShadow,
  ...props
}: {
  onPress?: () => void;
  children?: React.ReactNode;
  size?: number;
  pressedShadow?: string;
  link?: RelativePathString | ExternalPathString;

  [key: string]: any;
}) {
  const { primary: colorPrimary, textButton: textColor, shadow } = useColor();
  const pressedStyle = pressedShadow || `2px 2px 2px ${shadow}`;
  const unPressedStyle = unPressedShadow || `4px 8px 8px ${shadow}`;
  return (
    <View>
      <Pressable
        style={({ pressed }) => [
          {
            boxShadow: pressed ? pressedStyle : unPressedStyle,
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
