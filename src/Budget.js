class Budget {
  constructor(count) {
    this.count = count;
  }

  divideBudget(budget) {
    this.count = Math.floor(parseInt(budget) / 1000);
  }

  returnCount() {
    return this.count;
  }
}

module.exports = Budget;
