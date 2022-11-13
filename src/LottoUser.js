class LottoUser {
  #amount;

  constructor(amount) {
    this.validate(amount);
    this.#amount = amount;
  }

  validate(amount) {
    if (typeof amount !== 'number') {
      throw new TypeError('[ERROR] 로또 구입 금액은 숫자여야 합니다.');
    }
    if (amount % 1000 !== 0) {
      throw new Error('[ERROR] 로또 구입 금액은 1,000원 단위여야 합니다.');
    }
  }
}

module.exports = LottoUser;
