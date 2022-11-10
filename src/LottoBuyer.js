const LottoSales = require('./LottoSales');

class LottoBuyer {
  #money;

  #lotto;

  constructor(money) {
    LottoBuyer.#validateMoney(money);
    this.#money = money;
  }

  get lotto() {
    return this.#lotto;
  }

  buyLotto() {
    const lotto = LottoSales.issueLotto(this.#money);
    this.#lotto = lotto;
  }

  static #validateMoney(money) {
    if (money % 1000 !== 0) {
      throw new Error('[ERROR] 구입금액은 1,000의 배수여야 합니다.');
    }
  }
}

module.exports = LottoBuyer;
