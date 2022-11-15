const RegExp = require("./constants/RegExp");
const ErrorMessages = require("./constants/ErrorMessages");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate();
  }

  validate() {
    if (this.#numbers.length !== 6) throw new Error(ErrorMessages.NOT_6_NUMBER);
    this.#numbers.forEach((num) => {
      if (!RegExp.DIGIT_REG_EXP.test(num)) throw new Error(ErrorMessages.NOT_A_NUMBER);
      if (!(num >= 1 && num <= 45)) throw new Error(ErrorMessages.OUT_OF_RANGE);
    });
    if (this.#numbers.length != new Set(this.#numbers).size)
      throw new Error(ErrorMessages.DUPLICATED_NUM);
  }

  validateBonusNum(bonusNumInput) {
    if (!RegExp.DIGIT_REG_EXP.test(bonusNumInput))
      throw new Error(ErrorMessages.NOT_A_NUMBER);
    if (!(bonusNumInput >= 1 && bonusNumInput <= 45))
      throw new Error(ErrorMessages.OUT_OF_RANGE);
    if (this.#numbers.includes(bonusNumInput))
      throw new Error(ErrorMessages.DUPLICATED_NUM);
  }
}

module.exports = Lotto;
