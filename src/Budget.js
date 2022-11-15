const { ERROR } = require('./constants/constants.js');

class Budget {
  #budget;

  constructor(budget) {
    this.validate(budget);
    this.#budget = budget;
  }

  validate(budget) {
    this.validateBudgetInteger(budget);
    this.validateBudgetUnitLimit(budget);
  }

  validateBudgetInteger(budget) {
    if (isNaN(budget)) {
      throw new Error(ERROR.BUDGET.NOT_INTEGER);
    }
  }

  validateBudgetUnitLimit(budget) {
    if (budget % 1000 !== 0) {
      throw new Error(ERROR.BUDGET.NOT_IN_RANGE);
    }
  }

  getBudget() {
    return this.#budget;
  }
}

module.exports = Budget;
