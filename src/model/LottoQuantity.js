const { LOTTO_PRICE } = require('../utils/constants');
const Validation = require('../utils/Validation');

class LottoQuantity {
  #lottosQuantity;

  constructor(cash) {
    LottoQuantity.validate(cash);
    this.#lottosQuantity = cash / LOTTO_PRICE;
  }

  static validate(cash) {
    Validation.checkType(cash);
    Validation.checkAmountOfPrice(cash);
    Validation.checkUnitOfPrice(cash);
  }

  getLottosQuantity() {
    return this.#lottosQuantity;
  }
}

module.exports = LottoQuantity;
