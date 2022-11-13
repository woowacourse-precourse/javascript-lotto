const MissionUtils = require("@woowacourse/mission-utils");

class GenerateRandomNumber {
  generate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return this.sort(numbers);
  }

  sort(numbers) {
    return numbers.sort((a, b) => a - b);
  }
}

module.exports = GenerateRandomNumber;
