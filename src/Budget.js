const Validation = require("./Validation");

class Budget {
  budget;

  constructor(budget) {
    this.validate(budget);
    this.budget = budget;
  }

  validate(budget) {
    Validation.validateIsDivideThousand(budget);
  }
}

module.exports = Budget;
