import { getDateStringFromDate } from "./getDateStringFromDate";
import { getDateString } from "./getDateString";

const dayNames = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

const monthNames = [
  "Enero",
  "Febrero",
  "marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export function toRelativeDates(date: string) {
  const [day, month, year] = date.split("/");
  const dateObject = new Date();

  dateObject.setFullYear(Number(year));
  dateObject.setMonth(Number(month) - 1);
  dateObject.setDate(Number(day));
  if (isNaN(dateObject.getTime())) {
    return "invalid date";
  }

  const today = new Date();
  const nowDate = getDateStringFromDate(today.toString());
  if (date == nowDate) {
    return "Hoy";
  }
  const yesrsday = new Date(today);
  yesrsday.setDate(today.getDate() - 1);
  if (date == getDateStringFromDate(yesrsday.toString())) {
    return "Ayer";
  }
  const lastWeek = new Date(today);
  lastWeek.setDate(today.getDate() - 7);
  if (dateObject > lastWeek) {
    const { date: formateDate } = getDateString(dateObject);
    return `${dayNames[dateObject.getDay()]}, ${formateDate.day} de ${
      monthNames[dateObject.getMonth()]
    }`;
  }
  return date;
}
