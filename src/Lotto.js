const { ERROR_MESSAGES } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.validateNumberDuplication(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  validateNumberDuplication(numbers) {
    const numberSet = new Set();
    numbers.forEach((number) => {
      numberSet.add(number);
    });
    if (numberSet.size !== 6) {
      throw new Error(ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE);
    }
  }

  getLottoNumbers() {
    return this.#numbers;
  }

  getLottoNumbersByString() {
    return `[${[...this.#numbers].join(", ")}]`;
  }
}

module.exports = Lotto;
