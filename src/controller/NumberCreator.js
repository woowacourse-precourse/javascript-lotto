const { Random } = require('@woowacourse/mission-utils');

class NumberCreator {
  getRandomSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberCreator;
