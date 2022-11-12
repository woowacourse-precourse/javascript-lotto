const { ERROR } = require("./constants/messges");

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
    const MINIMUN_NUMBER = 1;
    const MAXIMUN_NUMBER = 45;

    if (number < MINIMUN_NUMBER || number > MAXIMUN_NUMBER) {
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
