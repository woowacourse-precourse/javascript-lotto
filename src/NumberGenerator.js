const { Random } = require('@woowacourse/mission-utils');

class NumberGenerator {
  createRandomSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberGenerator;
