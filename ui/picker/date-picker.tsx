import { useColor } from "@/theme/hooks/useColor";
import React, { useCallback, useState } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";
import { DatePickerModal } from "react-native-paper-dates";

export interface IDatePickerValue {
  day: string;
  month: string;
  year: string;
}

const getDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const year = date.getFullYear();

  return {
    day: day.toString().padStart(2, "0"),
    month: month.toString().padStart(2, "0"),
    year: year.toString().padStart(4, "0"),
  };
};

export default function DatePicker({
  value,
  onChange,
}: {
  value: IDatePickerValue;
  onChange: (value: IDatePickerValue) => void;
}) {
  const color = useColor();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<IDatePickerValue>(value);

  const onDismissSingle = useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = useCallback(
    (params: { date: any }) => {
      setOpen(false);

      const newDate = getDate(params.date);
      setDate(newDate);
      onChange(newDate);
    },
    [setOpen, setDate]
  );

  return (
    <View
      style={{
        backgroundColor: color.inputDisabled,
        borderRadius: 10,
        paddingTop: 3,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button onPress={() => setOpen(true)} uppercase={false}>
        <Text
          style={{ color: color.textOnCard, fontSize: 20 }}
        >{`${date.day}/${date.month}/${date.year}`}</Text>
      </Button>
      <DatePickerModal
        disableStatusBarPadding
        locale="en"
        mode="single"
        visible={open}
        onDismiss={onDismissSingle}
        date={
          new Date(Number(date.year), Number(date.month) - 1, Number(date.day))
        }
        onConfirm={onConfirmSingle}
      />
    </View>
  );
}
