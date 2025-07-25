import Decimal from "decimal.js";

export const divideNumber = (a, b) => {
  const aNumber = new Decimal(a.toString());
  const bNumber = new Decimal(b.toString());
  return aNumber.dividedBy(bNumber).toNumber();
};
