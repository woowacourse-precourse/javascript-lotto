const { Random } = require("@woowacourse/mission-utils");

const RandomNumberGenerator = {
  RANGE_MAX: 45,
  RANGE_MIN: 1,
  QUANTITY: 6,

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(
      RandomNumberGenerator.RANGE_MIN,
      RandomNumberGenerator.RANGE_MAX,
      RandomNumberGenerator.QUANTITY
    );
  },
};

module.exports = RandomNumberGenerator;
