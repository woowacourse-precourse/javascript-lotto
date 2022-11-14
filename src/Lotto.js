const { Console } = require("@woowacourse/mission-utils");
const {
  validateLottoLength,
  validateNumbersRange,
  validateDuplicateNumbers,
  validateOnlyNumber,
} = require("./Exception");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    validateLottoLength(numbers);
    validateNumbersRange(numbers);
    validateDuplicateNumbers(numbers);
    validateOnlyNumber(numbers);
  }

  // TODO: 추가 기능 구현
  printNumbers() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }
  hasNumber(number) {
    return this.#numbers.includes(number);
  }
}

module.exports = Lotto;
