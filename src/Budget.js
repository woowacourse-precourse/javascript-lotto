class Budget {
  constructor(count) {
    this.count = count;
  }

  divideBudget(budget) {
    this.count = Math.floor(parseInt(budget) / 1000);
  }
}

module.exports = Budget;
