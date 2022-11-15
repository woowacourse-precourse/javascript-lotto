const { Random } = require('@woowacourse/mission-utils');
const { validateInputMoney } = require('../utils/validations');
const {
  NUM_OF_LOTTO,
  MIN_LOTTO_NUM,
  MAX_LOTTO_NUM,
} = require('../constants/constants');

class LottoGenerator {
  constructor() {
    this.lottos;
  }

  validateInputMoney(money) {
    return validateInputMoney(money);
  }

  getNumOfLottos(money) {
    const MIN_UNIT = 1000;
    return parseInt(money / MIN_UNIT);
  }

  generateLottos(money) {
    const NUM_OF_LOTTO = this.getNumOfLottos(money);
    let lottos = [];
    for (let i = 0; i < NUM_OF_LOTTO; i += 1) {
      const ONE_LOTTO_NUM = this.generateLottoNum();
      lottos.push(this.sortArr(ONE_LOTTO_NUM));
    }
    this.lottos = lottos;
    return lottos;
  }

  sortArr(arr) {
    arr.sort((a, b) => a - b);
    return arr;
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
