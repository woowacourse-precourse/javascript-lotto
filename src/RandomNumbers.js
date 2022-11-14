const { Random } = require('@woowacourse/mission-utils');

class RandomNumbers {
  static generate() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = RandomNumbers;
