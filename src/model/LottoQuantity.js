const { LOTTO_PRICE } = require('../utils/constants');
const Validation = require('../utils/Validation');

class LottoQuantity {
  #lottosQuantity;

  constructor(cash) {
    this.validate(cash);
    this.#lottosQuantity = cash / LOTTO_PRICE;
  }

  validate(cash) {
    Validation.isNumber(cash);
    Validation.isMoreThanLottoPrice(cash);
    Validation.has1000Unit(cash);

    return true;
  }

  getLottosQuantity() {
    return this.#lottosQuantity;
  }
}

module.exports = LottoQuantity;
