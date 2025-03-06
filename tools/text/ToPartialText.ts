export const toPartialText = (text?: string, maxLength: number = 10) => {
  if (!text) {
    return "....";
  }
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
