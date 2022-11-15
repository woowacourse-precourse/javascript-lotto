const { Console } = require('@woowacourse/mission-utils');

class UserBudget {
  budget;

  constructor(budget) {
    this.isValidateBudget(budget);
    this.budget = budget;
  }

  isValidateBudget(budget) {
    this.isValidateDivideBudget(budget);
  }

  isValidateDivideBudget(budget) {
    if (budget % 1000) {
      throw new Error('[ERROR] 구입 금액은 1,000원 단위로 입력해야 합니다.');
    }
  }
}

module.exports = UserBudget;
