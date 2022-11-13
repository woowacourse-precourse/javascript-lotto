const MissionUtils = require('@woowacourse/mission-utils');
const utils = require('./util/util');
const Lotto = require('./Lotto');
const {
  LOTTO_RANGE_MIN,
  LOTTO_RANGE_MAX,
  LOTTO_MAX_LENGTH,
} = require('./util/util');

class LottoGenerator {
  static generate() {
    return new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(
        LOTTO_RANGE_MIN,
        LOTTO_RANGE_MAX,
        LOTTO_MAX_LENGTH
      ).sort(this.sortLotto)
    );
  }

  static sortLotto(a, b) {
    return a - b;
  }
}

module.exports = LottoGenerator;
