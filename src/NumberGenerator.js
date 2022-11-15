const { Random } = require('@woowacourse/mission-utils');
const { LOTTO } = require('./constants/constants');

class NumberGenerator {
  compareNumbers(a, b) {
    return a - b;
  }

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(
      LOTTO.MINIMUM_RANGE,
      LOTTO.MAXIMUM_RANGE,
      LOTTO.LENGTH
    ).sort(this.compareNumbers);
  }
}

module.exports = NumberGenerator;
