const { ERROR_MESSAGE, RULE } = require('./constants/lotto');
const LottoSales = require('./LottoSales');

class LottoBuyer {
  #money;

  #lotto;

  constructor(money) {
    LottoBuyer.#validateMoney(money);
    this.#money = money;
  }

  get money() {
    return this.#money;
  }

  get lotto() {
    return this.#lotto;
  }

  buyLotto() {
    const lotto = LottoSales.issueLotto(this.#money);
    this.#lotto = lotto;
  }

  static #validateMoney(money) {
    if (money % RULE.MONEY_UNIT !== 0) {
      throw new Error(ERROR_MESSAGE.RULE_MONEY);
    }
  }
}

module.exports = LottoBuyer;
