const DECIMAL_CONSTANT = "00";
export function formatToMoney(amount: number, currencyAbbr?: string) {
  const [integerPart, decimalPart] = amount.toString().split(".");
  let formatedIntegerPart = "0";
  let formatedDecimalPart = decimalPart ? decimalPart + DECIMAL_CONSTANT : "00";
  if (integerPart?.length > 0) {
    formatedIntegerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  return `${formatedIntegerPart},${formatedDecimalPart.slice(0, 2)}${
    currencyAbbr ? ` ${currencyAbbr}` : ""
  }`;
}

const toString = (number: number) => {
  return number.toString().replace(/\D/g, "");
};
