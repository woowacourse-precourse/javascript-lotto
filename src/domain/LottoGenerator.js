const { Random } = require('@woowacourse/mission-utils');

class LottoGenerator {
  createLotto() {}

  createLottoNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }
}

module.exports = LottoGenerator;
