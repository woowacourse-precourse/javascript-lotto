const { LOTTO_NUMBER } = require("./constants/index");
const Validator = require("./utils/Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validateLotto(numbers);
    this.#numbers = numbers;
  }

  validateLotto(numbers) {
    Validator.isLength(numbers, LOTTO_NUMBER.VALID_NUMBER_LENGTH)
      .isDuplicated(numbers)
      .isEvery({
        target: numbers,
        callback: Validator.isNumber,
        message: "[ERROR] 숫자가 아닌 번호가 존재합니다.",
      })
      .isEvery({
        target: numbers,
        callback: (number) =>
          Validator.isRange({
            target: number,
            start: LOTTO_NUMBER.MIN_NUMBER,
            end: LOTTO_NUMBER.MAX_NUMBER,
          }),
        message: "[ERROR] 로또 번호가 1~45 사이가 아닙니다.",
      });
    return true;
  }

  getSortedLotto() {
    return this.#numbers.sort((a, b) => a - b);
  }
}

module.exports = Lotto;
