const { ERROR_MESSAGES } = require('./constant');

class Cost {
  #cost;

  constructor(cost) {
    this.validate(cost);
    this.#cost = cost;
  }

  validate(cost) {
    if (isNaN(Number(cost))) {
      throw new Error(`${ERROR_MESSAGES.VALID_COST_NUMBER}`);
    }

    if (cost % 1000 !== 0) {
      throw new Error(`${ERROR_MESSAGES.VALID_COST_UNIT}`);
    }
  }

  getValue() {
    return this.#cost;
  }
}

module.exports = Cost;
