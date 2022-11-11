const { Console } = require('@woowacourse/mission-utils');

class UserBudget {
  budget;

  constructor(budget) {
    this.isValidateBudget(budget);
    this.budget = budget;
  }

  isValidateBudget(budget) {}
}

module.exports = UserBudget;
