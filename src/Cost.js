const { COST, INPUT_MESSAGE, ERROR_MESSAGE } = require('./constant/constant');
const utils = require('./utils');

class Cost {
  #cost;

  constructor(cost) {
    this.getCost();
    this.validate(this.#cost);
    this.#cost = cost;
  }

  getCost() {
    utils.getInput(INPUT_MESSAGE.COST, (input) => {
      this.#cost = +input;
    });
  }

  validate(cost) {
    if (cost % COST.DIVIDE !== 0) {
      throw new Error(ERROR_MESSAGE.COST);
    }
  }
}

module.exports = Cost;
