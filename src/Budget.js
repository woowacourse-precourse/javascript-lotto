class Budget {
  constructor(budget) {
    this.budget = budget;
  }

  divideBudget(budget) {
    this.budget = Math.floor(budget / 1000);
  }
}

module.exports = Budget;
