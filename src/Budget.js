class Budget {
  #budget;

  constructor(budget) {
    this.validate(budget);
    this.#budget = budget;
  }

  validate(budget) {
    if (budget === isNaN) {
      throw new Error("[ERROR] 금액은 정수 값이어야 합니다.");
    }
    if (budget%1000!==0) {
      throw new Error("[ERROR] 금액은 1000원 단위어야만 합니다.");
    }
  }

  getBudget() {
    return this.#budget
  }

}

module.exports = Budget;