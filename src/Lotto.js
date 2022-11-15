const { ERROR } = require("./Constants");
const {
  isNumberOfLottoNumbersCorrect,
  isNumbersInRange,
  hasDuplicateNumbers,
} = require("./Validate");
const { Console } = require("@woowacourse/mission-utils");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers.sort((a, b) => a - b);
  }

  validate(numbers) {
    if (!isNumberOfLottoNumbersCorrect(numbers)) {
      throw new Error(ERROR.incorrect_number_of_lotto_numbers);
    }

    if (!isNumbersInRange(numbers)) {
      throw new Error(ERROR.number_out_of_range);
    }

    if (hasDuplicateNumbers(numbers)) {
      throw new Error(ERROR.has_duplicate_number);
    }
  }

  isBonusNumberDuplicated(numbers) {
    for (let index = 0, length = numbers.length; index < length; index++) {
      let number = numbers[index];

      if (this.#numbers.includes(number)) {
        return true;
      }
    }
    return false;
  }

  print() {
    Console.print(`[${this.#numbers.join(", ")}]`);
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
