const LottoAmountDivideException = require('../../exception/lotto/LottoAmountDivideException');
const LottoAmountLessException = require('../../exception/lotto/LottoAmountLessException');
const Validation = require('../../util/Validation');

class LottoAmount {
  static #LOTTO_PRICE = 1000;

  #value;

  constructor(value) {
    LottoAmount.validate(value);
    this.#value = value;
  }

  static validate(value) {
    Validation.checkNotNumber(value);
    LottoAmount.validateAmountLess(value);
    LottoAmount.validateAmountDivide(value);
  }

  static validateAmountLess(value) {
    Validation.validate({
      condition: value < LottoAmount.#LOTTO_PRICE,
      exception: new LottoAmountLessException(LottoAmount.#LOTTO_PRICE),
    });
  }

  static validateAmountDivide(value) {
    Validation.validate({
      condition: value % LottoAmount.#LOTTO_PRICE !== 0,
      exception: new LottoAmountDivideException(LottoAmount.#LOTTO_PRICE),
    });
  }

  getValue() {
    return this.#value;
  }

  getLottoCount() {
    return this.#value / LottoAmount.#LOTTO_PRICE;
  }
}

module.exports = LottoAmount;
