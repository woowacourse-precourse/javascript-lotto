const { ERROR } = require("./constants/messges");
const { LOTTO, CALCULATION } = require("./constants/values");

class Bonus {
  #number;

  constructor() {
    this.#number = 0;
  }

  changeIntoNumber(number, winning) {
    this.#number = parseInt(number, CALCULATION.DECIMAL_NUMBER);

    this.validate(this.#number, winning);

    return this.#number;
  }

  validate(number, winning) {
    this.checkNumber(number);
    this.checkRange(number);
    this.checkDuplicate(number, winning);
  }

  checkNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.BONUS_NUMBER);
    }
  }

  checkRange(number) {
    if (number < LOTTO.MINIMUM || number > LOTTO.MAXIMUM) {
      throw new Error(ERROR.BONUS_RANGE);
    }
  }

  checkDuplicate(number, winning) {
    if (winning.includes(number)) {
      throw new Error(ERROR.BONUS_DUPLICATE);
    }
  }
}

module.exports = Bonus;
