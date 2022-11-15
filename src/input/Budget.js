const { ERROR_MESSAGE_BUDGET } = require('../constants/constants');

class Budget {
  #budget;

  constructor(budget) {
    this.validate(budget);
    this.#budget = budget;
  }

  validate(budget) {
    if (isNaN(budget)) {
      throw new Error(ERROR_MESSAGE_BUDGET.ISNAN);
    }
    if (budget < 1000) {
      throw new Error(ERROR_MESSAGE_BUDGET.RANGE);
    }
    if (budget % 1000 !== 0) {
      throw new Error(ERROR_MESSAGE_BUDGET.UNIT);
    }
  }

  getBudget() {
    return this.#budget;
  }
}

module.exports = Budget;