const LottoAmountDivideException = require('../../exception/lotto/LottoAmountDivideException');
const LottoAmountLessException = require('../../exception/lotto/LottoAmountLessException');
const LottoAmountNotNumberException = require('../../exception/lotto/LottoAmountNotNumberException');

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
    if (Number.isNaN(parseInt(value, 10)) || typeof value !== 'number') {
      throw new LottoAmountNotNumberException(value);
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
    
  }
}

module.exports = LottoAmount;
