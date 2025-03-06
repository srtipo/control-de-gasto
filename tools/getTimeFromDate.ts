export function getTimeFromDate(date: string) {
  const dateObject = new Date(date);
  if (isNaN(dateObject.getTime())) {
    return "invalid date";
  }
  const hours = dateObject.getHours().toString().padStart(2, "0");
  const minutes = dateObject.getMinutes().toString().padStart(2, "0");
  const seconds = dateObject.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}
