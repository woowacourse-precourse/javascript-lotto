const ErrorCase = require("./ErrorCase");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }

    const numbersDuplicated = ErrorCase.duplicatedNumbers(numbers);
    if (numbersDuplicated) {
      throw new Error("[ERROR] 로또 번호는 중복되지 않아야 합니다.");
    }
  }

  showNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
