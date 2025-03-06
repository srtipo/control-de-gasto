export function getDateStringFromDate(date: string) {
  const dateObject = new Date(date);
  if (isNaN(dateObject.getTime())) {
    return "invalid date";
  }
  const dateString = {
    day: String(dateObject.getDate()).padStart(2, "0"),
    month: String(dateObject.getMonth() + 1).padStart(2, "0"),
    year: String(dateObject.getFullYear()).padStart(4, "0"),
  };

  return `${dateString.day}/${dateString.month}/${dateString.year}`;
}
