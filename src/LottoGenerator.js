const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');

class LottoGenerator {
  static generate() {
    return new Lotto(
      MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
        (a, b) => a - b
      )
    );
  }
}

module.exports = LottoGenerator;
