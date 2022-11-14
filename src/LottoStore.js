const MissionUtils = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto.js');
const { isValidMoneyNumberAmount } = require('./util/utils');
const { VALUE } = require('./constants/numbers');

class LottoStore {
  askBuyLottoCount(money) {
    this.validateMoney(money);
    return money / VALUE.LOTTO_PRICE;
  }

  validateMoney(input) {
    const money = Number(input);
    isValidMoneyNumberAmount(money);
  }

  sellLotto() {
    const result = this.getNewLotto();
    return result;
  }

  getNewLotto() {
    return new Lotto(this.getRandomLottoNumbers());
  }

  getRandomLottoNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(
      VALUE.MIN_LOTTO_NUMBER,
      VALUE.MAX_LOTTO_NUMBER,
      VALUE.VALID_LOTTO_NUMBER_LENGTH
    ).sort(function (a, b) {
      return a - b;
    });
  }
}

module.exports = LottoStore;
