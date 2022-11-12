const { ERROR } = require('./utils/Constants');

class Price {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  };

  validate(numbers) {
    if (numbers % 1000 !== 0) {
      throw new Error(`${ERROR.INVALID_PRICE}`);
    };
  };
};

module.exports = Price;
