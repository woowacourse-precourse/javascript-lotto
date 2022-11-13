const MissionUtils = require("@woowacourse/mission-utils");

class GenerateRandomNumber {
  generate() {
    const numbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);

    return numbers.sort();
  }
}

module.exports = GenerateRandomNumber;
