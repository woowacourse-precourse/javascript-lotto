const Validator = require("./Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Validator.isRightLottoNumbers(numbers)) {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    }
  }

  show() {
    return `[${this.#numbers.join(", ")}]`;
  }

  getNumber() {
    return this.#numbers;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
