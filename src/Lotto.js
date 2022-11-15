const { LOTTO_NUMBER } = require("./constants/index");
const Validator = require("./utils/Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    Validator.isLength(numbers, LOTTO_NUMBER.VALID_NUMBER_LENGTH).isDuplicated(
      numbers
    );
    numbers.every(Validator.isNumber);
    numbers.every((number) =>
      Validator.isRange({
        target: number,
        start: LOTTO_NUMBER.MIN_NUMBER,
        end: LOTTO_NUMBER.MAX_NUMBER,
      })
    );
    return true;
  }

  getSortedLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
