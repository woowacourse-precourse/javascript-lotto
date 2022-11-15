const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createRandomNumbers() {
    const randomNumber = Random.pickUniqueNumbersInRange(1, 45, 6);
    return randomNumber;
  }
}

module.exports = NumberGenerator;
