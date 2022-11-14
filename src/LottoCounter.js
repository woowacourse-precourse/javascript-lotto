const { LOTTO_PRICE } = require('./utils/constants.js');
const Validation = require('./utils/Validation');

class LottoCounter {
  constructor(cash) {
    this.isValidCash(cash);
    this.lottosQuantity = cash / LOTTO_PRICE;
  }

  isValidCash(cash) {
    Validation.isNumber(cash);
    Validation.isMoreThanLottoPrice(cash);
    Validation.has1000Unit(cash);

    return true;
  }

  getLottosQuantity() {
    return this.lottosQuantity;
  }
}

module.exports = LottoCounter;
