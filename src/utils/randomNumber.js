const { Random } = require("@woowacourse/mission-utils");
const { LOTTO_VALUE } = require("../constants/index");

const generateRandomNumbers = () =>
  Random.pickUniqueNumbersInRange(
    LOTTO_VALUE.MIN,
    LOTTO_VALUE.MAX,
    LOTTO_VALUE.LENGTH
  ).sort();

module.exports = { generateRandomNumbers };
