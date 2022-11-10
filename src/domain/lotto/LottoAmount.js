class LottoAmount {
  static LOTTO_PRICE = 1000;

  #value;

  constructor(value) {
    this.#value = value;
  }

  static validate(value) {

  }

  static from(value) {
    return new LottoAmount(value);
  }

  getLottoCount() {

  }
}

module.exports = LottoAmount;
