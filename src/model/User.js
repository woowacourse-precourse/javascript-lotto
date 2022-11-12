const { ERROR_MESSAGE_PURCHASE_AMOUNT, LOTTO_RULE } = require('../utils/constant');

class User {
  constructor() {
    this.money = 0;
    this.lottoNumbers = [];
  }

  getMoney() {
    return this.money;
  }

  getLottoNumbers() {
    return this.lottoNumbers;
  }

  setMoney(money) {
    this.validateMoney(money);
    this.money = Number(money);
  }

  setLottoNumbers(lottoNumbers) {
    this.lottoNumbers = lottoNumbers;
  }

  validateMoney(money) {
    if (money.includes(' ')) {
      throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.NOT_VALID_BLANK);
    }
    if (!Number(money)) {
      throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.NOT_VALID_TYPE);
    }
    if (Number(money) % LOTTO_RULE.MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE_PURCHASE_AMOUNT.NOT_VALID_UNIT);
    }
  }
}

module.exports = User;
