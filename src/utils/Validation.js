const { ERROR, LOTTO_DETAILS } = require("../constant/constant");

class Validation {
  static isNumber(userInput) {
    if (isNaN(userInput)) {
      throw new Error(ERROR.NAN);
    }
  }

  static isLottoMoney(userInput) {
    if (userInput % 1000 !== 0) {
      throw new Error(ERROR.IS_LOTTO_MONEY);
    }
  }

  static isLottoInput(userInput) {
    if (userInput.length !== LOTTO_DETAILS.EA) {
      throw new Error(ERROR.IS_LOTTO_INPUT);
    }
  }

  static isLottoVariable(userInput) {
    if (!(userInput >= LOTTO_DETAILS.MIN && userInput <= LOTTO_DETAILS.MAX)) {
      throw new Error(ERROR.IS_LOTTO_NUMBER);
    }
  }

  static isOverlap(userInput) {
    userInput.forEach((v, i) => {
      if (userInput.indexOf(v) !== i) throw new Error(ERROR.IS_OVERLAP);
    });
  }
}

module.exports = Validation;
