const { DEFAULT, ERROR } = require("./utils/constant.js");

class Bonus {
  #number;
  #luckyNumbers;
  constructor(number, luckyNumbers) {
    this.#number = number;
    this.#luckyNumbers = luckyNumbers;
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
    if (this.checkNumber(this.#number)) throw ERROR.BONUS_NUM_ERROR;
    if (!this.checkRange(this.#number)) throw ERROR.RANGE_ERROR;
    if (this.checkDuplicate(this.#number, this.#luckyNumbers))
      throw ERROR.DUPLICATE_ERROR;
  }

  getBonusNumber() {
    return this.#number;
  }
}

module.exports = Bonus;
