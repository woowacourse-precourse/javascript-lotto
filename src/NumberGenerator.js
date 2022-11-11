const { Random } = require("@woowacourse/mission-utils");

class NumberGenerator {
  createRandomNumber() {
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Random.pickNumberInRange(1, 45));
    }
    return [...numbers].sort((a, b) => a - b);
  }
}

module.exports = NumberGenerator;
