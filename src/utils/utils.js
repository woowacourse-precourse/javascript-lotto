const { Random } = require('@woowacourse/mission-utils');

function calcPercentRounding(part, whole, decimal) {
  const percent = (parseInt(part, 10) / parseInt(whole, 10)) * 100;

  return percent.toFixed(decimal);
}

function pickUniqueNumbersInRange(start, end, count) {
  return Random.pickUniqueNumbersInRange(start, end, count);
}

module.exports = {
  calcPercentRounding,
  pickUniqueNumbersInRange,
};
