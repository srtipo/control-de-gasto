import { useColor } from "@/theme/hooks/useColor";
import { View } from "react-native";
import { MainTitle } from "@/ui/titles/main-title";
import UserSVG from "@/ui/svg/user-svg";
import { SignInForm } from "@/app/sign-in/components/sign-in-form";

export default function SignInScreen() {
  const backgroundColor = useColor().background;
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: backgroundColor,
      }}
    >
      <View style={{ padding: 5 }}>
        <UserSVG width={92} height={92} />
      </View>
      <MainTitle>Iniciar Sesión</MainTitle>
      <SignInForm />
    </View>
  );
}
