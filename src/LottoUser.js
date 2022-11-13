class LottoUser {
  #amount;
  #lottoCount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
    this.#lottoCount = this.calcLottoCount(amount);
  }

  validate(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.');
    }
  }

  calcLottoCount(amount) {
    return amount / 1000;
  }
}

module.exports = LottoUser;
