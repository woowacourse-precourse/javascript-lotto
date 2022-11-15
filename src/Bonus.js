const { ERR_MSG } = require("./constants/constants");
class Bonus {
  #winningNum;
  #bonusNum;

  constructor(numbers, bonus) {
    this.#winningNum = numbers;
    this.validate(bonus);
    this.#bonusNum = parseInt(bonus);
  }

  validate(value) {
    if (isNaN(+value)) {
      throw new Error(ERR_MSG.notNumber);
    }
    if (!(value >= 1 && value <= 45)) {
      throw new Error(ERR_MSG.notLottoRange);
    }
    this.validUnique(value);
  }

  validUnique(value) {
    if (this.#winningNum.includes(parseInt(value))) {
      throw new Error(ERR_MSG.notUniqueNumber);
    }
  }

  getBonusNum() {
    return this.#bonusNum;
  }
}

module.exports = Bonus;
