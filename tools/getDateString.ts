export function getDateString(dateTime: Date = new Date()) {
  const date = {
    day: String(dateTime.getDate()).padStart(2, "0"),
    month: String(dateTime.getMonth() + 1).padStart(2, "0"),
    year: String(dateTime.getFullYear()).padStart(4, "0"),
  };

  const time = {
    hour: dateTime.getHours().toString().padStart(2, "0"),
    minute: dateTime.getMinutes().toString().padStart(2, "0"),
  };

  return { date, time };
}
