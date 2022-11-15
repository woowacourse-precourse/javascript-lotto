const { LOTTOREQUIREMENT, WINNINGCONDITION } = require("./constant/Constant");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validateLottoRange(numbers) {
    numbers.forEach((number) => {
      if (Number.isNaN(number)) {
        throw new Error(WINNINGCONDITION.NaN);
      }
      if (number < LOTTOREQUIREMENT.MIN || number > LOTTOREQUIREMENT.MAX) {
        throw new Error(WINNINGCONDITION.RANGE);
      }
    });
  }

  validate(numbers) {
    this.validateLottoRange(numbers);
    if (numbers.length !== LOTTOREQUIREMENT.LENGTH) {
      throw new Error(WINNINGCONDITION.LENGTH);
    }
    if (new Set(numbers).size !== LOTTOREQUIREMENT.LENGTH) {
      throw new Error(WINNINGCONDITION.DUPLICATE);
    }
  }
}

module.exports = Lotto;
