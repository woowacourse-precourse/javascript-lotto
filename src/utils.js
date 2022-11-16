const MissionUtils = require("@woowacourse/mission-utils");

const getRandomNumbers = (fromNum, toNum, size) => {
  return MissionUtils.Random.pickUniqueNumbersInRange(fromNum, toNum, size);
}

const getCashFlow = (prices, counts) => {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    sum += counts[i] * prices[i];
  }
  return sum;
}

const getYield = (current, invested) => {
  let y = (current / invested) * 100;
  return Number(y.toFixed(1));
}

module.exports = {
  getRandomNumbers,
  getCashFlow,
  getYield,
}
