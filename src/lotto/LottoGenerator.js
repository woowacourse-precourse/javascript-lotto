const MissionUtils = require('@woowacourse/mission-utils');

const gameConfig = require('../util/gameConfig');
const Lotto = require('./Lotto');

class LottoGenerator {
  static generate() {
    return new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(
        gameConfig.LOTTO_RANGE_MIN,
        gameConfig.LOTTO_RANGE_MAX,
        gameConfig.LOTTO_MAX_LENGTH
      ).sort(this.sortLotto)
    );
  }

  static sortLotto(a, b) {
    return a - b;
  }

  static generatedByCount(count) {
    const result = [];
    for (let i = 0; i < count; i++) {
      result.push(this.generate());
    }
    return result;
  }
}

module.exports = LottoGenerator;
