import { useColor } from "@/theme/hooks/useColor";
import { Text, View } from "react-native";
import { IApiErrorResponse } from "./error-response.interface";
import { getErrorMessage } from "./get-error-message";

export function MessageError({ error }: { error?: IApiErrorResponse | null }) {
  const message = getErrorMessage(error as IApiErrorResponse);
  const color = useColor().error;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ color: color }}>{message}</Text>
    </View>
  );
}
