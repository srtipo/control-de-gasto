import { Pressable, Text, View } from "react-native";
import { TimePickerModal } from "react-native-paper-dates";
import { Button } from "react-native-paper";

import { useCallback, useState } from "react";
import { useColor } from "@/theme/hooks/useColor";

export interface ITimePickerValue {
  hour: string;
  minute: string;
}

export const TimePicker = ({
  value,
  onChange,
}: {
  value?: ITimePickerValue;
  onChange?: (value: ITimePickerValue) => void;
}) => {
  const color = useColor();
  const date = new Date();
  const [time, setTime] = useState<ITimePickerValue>(
    value || {
      hour: date.getHours().toString(),
      minute: date.getMinutes().toString(),
    }
  );
  const [visible, setVisible] = useState(false);
  const onDismiss = useCallback(() => {
    setVisible(false);
  }, [setVisible]);

  const onConfirm = useCallback(
    ({ hours, minutes } = { hours: 0, minutes: 0 }) => {
      setVisible(false);
      setTime({
        hour: hours.toString().padStart(2, "0"),
        minute: minutes.toString().padStart(2, "0"),
      });
      onChange &&
        onChange({
          hour: hours.toString().padStart(2, "0"),
          minute: minutes.toString().padStart(2, "0"),
        });
    },
    [setVisible]
  );
  return (
    <View
      style={{
        backgroundColor: color.inputDisabled,
        borderRadius: 10,
        paddingTop: 3,
      }}
    >
      <Button onPress={() => setVisible(true)} uppercase={false}>
        <Text style={{ color: color.textOnCard, fontSize: 18 }}>
          {time.hour}:{time.minute}
        </Text>
      </Button>
      <TimePickerModal
        visible={visible}
        onDismiss={onDismiss}
        onConfirm={onConfirm}
        hours={Number(time.hour)}
        minutes={Number(time.minute)}
      />
    </View>
  );
};
