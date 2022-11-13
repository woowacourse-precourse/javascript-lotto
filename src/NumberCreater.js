const { Random } = require('@woowacourse/mission-utils');

class NumberCreater {
  createRandomSixNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberCreater;
