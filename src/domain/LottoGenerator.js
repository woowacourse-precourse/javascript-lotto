const { Random } = require('@woowacourse/mission-utils');

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;
const NUM_OF_LOTTO = 6;

class LottoGenerator {
  constructor() {
    this.lotto;
  }

  generateLottoNum() {
    return Random.pickUniqueNumbersInRange(
      MIN_LOTTO_NUM,
      MAX_LOTTO_NUM,
      NUM_OF_LOTTO
    );
  }

  generateRandomNum() {
    return Random.pickNumberInRange(MIN_LOTTO_NUM, MAX_LOTTO_NUM);
  }
}

module.exports = LottoGenerator;
