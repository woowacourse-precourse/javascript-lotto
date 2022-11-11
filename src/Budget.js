const { THOUSAND } = require("./constant/Constant");

class Budget {
  constructor(count) {
    this.count = count;
  }

  divideBudget(budget) {
    this.count = Math.floor(parseInt(budget) / THOUSAND);
  }

  returnCount() {
    return this.count;
  }
}

module.exports = Budget;
