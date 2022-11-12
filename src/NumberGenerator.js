const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createNumber() {
    const number = Random.pickUniqueNumbersInRange(1, 45, 6);
    return number.sort((a, b) => a - b);
  }
}

module.exports = NumberGenerator;
