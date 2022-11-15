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
        throw new Error('[ERROR] 금액은 정수 값이어야 합니다.');
      }
    }
  
    validateBudgetUnitLimit(budget) {
      if (budget % 1000 !== 0) {
        throw new Error('[ERROR] 금액은 1000원 단위어야만 합니다.');
      }
    }
  
    getBudget() {
      return this.#budget;
    }
  }
  
  module.exports = Budget;
  