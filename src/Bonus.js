const { Console, Random } = require("@woowacourse/mission-utils");

class Bonus {
  bonus;
  constructor(number) {
    this.validation(number);
    this.bonus = number;
  }
  validation(number) {
    this.isBonusInRange(number);
  }

  isBonusInRange(bonus) {
    if (!(Number(bonus) >= 1 && Number(bonus) <= 45))
      throw new Error("[ERROR] 범위 외 숫자");
  }
}

module.exports = Bonus;
