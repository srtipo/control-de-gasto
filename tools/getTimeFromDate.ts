export function getTimeFromDate(date: string) {
  const milisegundos = Date.parse(date);
  const dateObject = new Date(milisegundos);
  if (isNaN(dateObject.getTime())) {
    return "invalid date";
  }
  const hours = dateObject.getUTCHours().toString().padStart(2, "0");
  const minutes = dateObject.getUTCMinutes().toString().padStart(2, "0");
  const seconds = dateObject.getUTCSeconds().toString().padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
}
