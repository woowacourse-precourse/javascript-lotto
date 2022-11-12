const { ERROR } = require("./constants/messges");
const { LOTTO } = require("./constants/values");

class Bonus {
  #number;

  constructor(number, winning) {
    this.validate(number, winning);
    this.#number = number;
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
