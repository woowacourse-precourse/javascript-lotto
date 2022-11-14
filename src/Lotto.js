const { ERROR } = require("./constants/messges");
const { LOTTO, CALCULATION } = require("./constants/values");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = [];
    this.changeIntoArray(numbers);
  }

  changeIntoArray(numbers) {
    numbers.split(",").forEach((number) => {
      this.#numbers.push(number);
    });

    this.validate(this.#numbers);
  }

  validate(numbers) {
    this.checkNumber(numbers);
    this.checkLength(numbers);
    this.checkRange(numbers);
    this.checkDuplicate(numbers);
  }

  checkNumber(numbers) {
    const invalidList = numbers.filter((number) => {
      return isNaN(number);
    });
    if (invalidList.length > 0) {
      throw new Error(ERROR.LOTTO_NUMBER);
    }
  }

  checkLength(numbers) {
    if (numbers.length !== LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_LENGTH);
    }
  }

  checkRange(numbers) {
    numbers.forEach((number) => {
      if (number < LOTTO.MINIMUM || number > LOTTO.MAXIMUM) {
        throw new Error(ERROR.LOTTO_RANGE);
      }
    });
  }

  checkDuplicate(numbers) {
    if ([...new Set(numbers)].length < LOTTO.LENGTH) {
      throw new Error(ERROR.LOTTO_DUPLICATE);
    }
  }

  changeIntoNumber() {
    this.#numbers = this.#numbers.map((number) => {
      return (this.#numbers = parseInt(number, CALCULATION.DECIMAL_NUMBER));
    });

    return this.#numbers;
  }
}

module.exports = Lotto;
