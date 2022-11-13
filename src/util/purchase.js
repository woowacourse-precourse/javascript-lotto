const { Random } = require("@woowacourse/mission-utils");
const { ERROR_MESSAGE } = require("./message");

function getCountByPay(pay) {
  const PRICE = 1000;

  if (typeof pay !== "number") throw ERROR_MESSAGE.Enter;
  if (pay % PRICE !== 0) throw ERROR_MESSAGE.Enter;

  return pay / PRICE;
}

function getRandomNumbers() {
  const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
  return numbers.sort((a, b) => a - b);
}

module.exports = { getCountByPay, getRandomNumbers };
