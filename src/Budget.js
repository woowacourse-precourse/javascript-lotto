const { Console } = require("@woowacourse/mission-utils");

class Budget {
  budget;
  constructor(budget) {
    this.validate(budget);
    this.budget = budget;
  }

  validate(budget) {
    this.validateIsDivideTen(budget);
  }

  validateIsDivideTen(budget) {
    if (budget % 1000) {
      Console.close();
      throw new Error("[ERROR] 천원 단위로 입력해야합니다.");
    }
  }
}

module.exports = Budget;
