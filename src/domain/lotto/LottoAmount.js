const LottoAmountDivideException = require('../../exception/lotto/LottoAmountDivideException');
const LottoAmountLessException = require('../../exception/lotto/LottoAmountLessException');
const NotNumberException = require('../../exception/NotNumberException');
const { checkNotNumber } = require('../../util/validate');

class LottoAmount {
  static #LOTTO_PRICE = 1000;

  #value;

  constructor(value) {
    LottoAmount.validate(value);
    this.#value = value;
  }

  static from(value) {
    return new LottoAmount(value);
  }

  static validate(value) {
    if (checkNotNumber(value)) {
      throw new NotNumberException(value);
    }

    if (value < LottoAmount.#LOTTO_PRICE) {
      throw new LottoAmountLessException(LottoAmount.#LOTTO_PRICE);
    }

    if (value % 1000 !== 0) {
      throw new LottoAmountDivideException(LottoAmount.#LOTTO_PRICE);
    }
  }

  getValue() {
    return this.#value;
  }

  getLottoCount() {
    return this.#value / LottoAmount.#LOTTO_PRICE;
  }
}

module.exports = LottoAmount;
