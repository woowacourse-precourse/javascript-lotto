const MESSAGES = require("./Constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = this.validate(this.changeForm(numbers));
  }

  changeForm(numbers) {
    return numbers.split(',').map((number) => parseInt(number));
  }

  validate(numbers) {
    if (numbers.includes(NaN)) {
      throw new Error(MESSAGES.ERROR.FORM);
    }
    if (numbers.length !== 6) {
      throw new Error(MESSAGES.ERROR.NUMBER);
    }
    numbers.forEach(number => {
      if(number > 45 || number < 1) {
        throw new Error(MESSAGES.ERROR.RANGE);
      }
    });
    if ([...new Set(numbers)].length !== 6) {
      throw new Error(MESSAGES.ERROR.DUPICATION);
    }
    return numbers;
  }
}

module.exports = Lotto;
