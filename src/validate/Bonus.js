const { DEFAULT, ERROR } = require("../utils/constant.js");

class Bonus {
  #number;
  #correctNumbers;
  constructor(number, correctNumbers) {
    this.#number = Number(number);
    this.#correctNumbers = correctNumbers;
    this.check();
  }

  checkNumber(number) {
    return isNaN(number);
  }

  checkDuplicate(number, numbers) {
    return numbers.includes(number);
  }

  checkRange(number) {
    return number <= DEFAULT.MAX_LOTTO_NUM && number >= DEFAULT.MIN_LOTTO_NUM;
  }

  check() {
    if (this.checkNumber(this.#number)) throw new Error(ERROR.BONUS_NUM_ERROR);
    if (!this.checkRange(this.#number)) throw new Error(ERROR.RANGE_ERROR);
    if (this.checkDuplicate(this.#number, this.#correctNumbers))
      throw new Error(ERROR.DUPLICATE_ERROR);
  }
}

module.exports = Bonus;
