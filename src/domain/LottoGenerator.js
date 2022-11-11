const { Random } = require('@woowacourse/mission-utils');

const MIN_LOTTO_NUM = 1;
const MAX_LOTTO_NUM = 45;

class LottoGenerator {
  constructor() {
    this.lotto;
  }

  generateRandomNum() {
    return Random.pickNumberInRange(MIN_LOTTO_NUM, MAX_LOTTO_NUM);
  }
}

module.exports = LottoGenerator;
