const MissionUtils = require('@woowacourse/mission-utils');

class Random {
  static pickUniqueNumbersInRange(start, end, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(start, end, count);
  }
}

module.exports = Random;
