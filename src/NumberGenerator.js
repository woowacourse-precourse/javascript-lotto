const MissionUtils = require('@woowacourse/mission-utils');

class NumberGenerator {
  createRandomSixNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = NumberGenerator;
