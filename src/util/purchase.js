const { Random } = require("@woowacourse/mission-utils");

function getCountByPay(pay) {
  const PRICE = 1000;

  if (typeof pay !== "number") throw ERROR_MESSAGE.enter;
  if (pay % PRICE !== 0) throw ERROR_MESSAGE.enter;

  return pay / PRICE;
}

function getRandomNumbers() {
  return Random.pickUniqueNumbersInRange(1, 10, 6);
}

module.exports = { getCountByPay, getRandomNumbers };
