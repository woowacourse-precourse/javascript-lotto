const { Random } = require('@woowacourse/mission-utils');

class NumberGenerator {
  pickRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberGenerator;
