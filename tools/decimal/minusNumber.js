import Decimal from "decimal.js";

export const minusNumber = (a, b) => {
  const aNumber = new Decimal(a.toString());
  const bNumber = new Decimal(b.toString());
  return aNumber.minus(bNumber).toNumber();
};
