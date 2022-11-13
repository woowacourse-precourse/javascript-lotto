function getCountByPay(pay) {
  const PRICE = 1000;

  if (typeof pay !== "number") throw ERROR_MESSAGE.enter;
  if (pay % PRICE !== 0) throw ERROR_MESSAGE.enter;
  return pay / PRICE;
}

module.exports = { getCountByPay };
