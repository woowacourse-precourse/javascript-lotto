const MissionUtils = require("@woowacourse/mission-utils");
const { LOTTO_NUMBER } = require("../utils/constants");

class GenerateRandomNumber {
  generate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(
      LOTTO_NUMBER.MIN_RANGE,
      LOTTO_NUMBER.MAX_RANGE,
      LOTTO_NUMBER.COUNT
    );

    return this.sortNumbers(numbers);
  }

  sortNumbers(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = GenerateRandomNumber;
