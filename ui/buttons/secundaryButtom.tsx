import { useColor } from "@/theme/hooks/useColor";
import { Pressable, StyleProp, Text, TextStyle } from "react-native";

export function SecundaryButton({
  title,
  onPress,
  textStyle,
  buttonColor,
  ...props
}: {
  title: string;
  textStyle?: StyleProp<TextStyle>;
  onPress: () => void;
  [key: string]: any;
}) {
  const color = useColor();
  return (
    <Pressable
      style={{
        backgroundColor: "transparent",
        borderColor: buttonColor ? buttonColor : color.secondary,
        borderWidth: 1,
        borderStyle: "dashed",
        padding: 10,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={onPress}
      {...props}
    >
      <Text
        style={[
          {
            color: buttonColor ? buttonColor : color.secondary,
            fontSize: 15,
          },
          textStyle,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}
