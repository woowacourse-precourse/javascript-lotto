const { COST, ERROR_MESSAGE } = require('./constant/constant');

class Cost {
  #cost;

  constructor(cost) {
    this.#validate(cost);
    this.#cost = cost;
  }

  getValue() {
    return this.#cost;
  }

  #validate(cost) {
    if (cost !== +cost) {
      throw new Error(ERROR_MESSAGE.NOT_NUMBER);
    }
    if (cost % COST.DIVIDE !== 0) {
      throw new Error(ERROR_MESSAGE.COST);
    }
  }
}

module.exports = Cost;
