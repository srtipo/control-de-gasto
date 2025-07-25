import Decimal from "decimal.js";

export const multiplyNumber = (a, b) => {
  a = Decimal(a.toString());
  b = Decimal(b.toString());
  return a.times(b).toNumber();
};
