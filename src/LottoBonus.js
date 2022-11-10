const { Console } = require("@woowacourse/mission-utils");

class LottoBonus {
  number;

  constructor(number) {
    this.validate(number);
    this.number = number;
  }

  validate(number) {
    this.validateIsProperNumber(number);
  }

  validateIsProperNumber(number) {
    if (0 > number || 45 < number) {
      Console.close();
      throw new Error("[ERROR] 1~45 사이의 숫자를 입력하여야 합니다.");
    }
  }
}

module.exports = LottoBonus;
