import Decimal from "decimal.js";

export const plusNumber = (a, b) => {
  const aNumber = new Decimal(a.toString());
  const bNumber = new Decimal(b.toString());
  return aNumber.plus(bNumber).toNumber();
};
