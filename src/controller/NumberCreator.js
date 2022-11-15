const { Random } = require('@woowacourse/mission-utils');

class NumberCreator {
  static getRandomSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberCreator;
