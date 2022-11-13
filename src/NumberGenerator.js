const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createRandomNumber() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

module.exports = NumberGenerator;
