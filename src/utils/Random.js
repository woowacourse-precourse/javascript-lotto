const MissionUtils = require('@woowacourse/mission-utils');

class Random {
  static pickUniqueNumbersInRange(startInclusive, endInclusive, count) {
    return MissionUtils.Random.pickUniqueNumbersInRange(startInclusive, endInclusive, count);
  }
}

module.exports = Random;
