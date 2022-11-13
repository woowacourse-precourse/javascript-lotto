const Lotto = require('./Lotto.js');
const {
  isValidMoneyNumberAmount
} = require('../../backup/src/new/util/utils.js');
const constants = require('./constants/numbers.js');
const MissionUtils = require('@woowacourse/mission-utils');

class LottoStore {
  askBuyLottoCount(money) {
    this.validateMoney(money);
    return money / 1000;
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
      constants.MIN_LOTTO_NUMBER,
      constants.MAX_LOTTO_NUMBER,
      constants.VALID_LOTTO_NUMBER_LENGTH
    ).sort(function (a, b) {
      return a - b;
    });
  }
}

module.exports = LottoStore;
