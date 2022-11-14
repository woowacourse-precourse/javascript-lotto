const { ERROR } = require('./utils/Constants');

class Price {
  #price;

  constructor(price) {
    this.#price = price;
    this.checkPrice(this.#price);
  };

  checkPrice(price) {
    this.checkWord(price);
    this.checkRange(Number(price));
    this.checkDivision(Number(price));
  };

  checkWord(price) {
    if ((/[^0-9]/g).test(price)) {
      throw new Error(ERROR.INVALID_PRICE_WORD);
    };
  };

  checkRange(price) {
    if (price < 1) {
      throw new Error(ERROR.INVALID_PRICE_RANGE);
    };
  };

  checkDivision(price) {
    if (price % 1000 !== 0) {
      throw new Error(ERROR.INVALID_PRICE_DIVISION);
    };
  };
};

module.exports = Price;
