const { Random } = require('@woowacourse/mission-utils');

class NumberGenerator {
  static generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

module.exports = NumberGenerator;
