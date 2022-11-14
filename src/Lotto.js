const Validator = require("./validator/Validator");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!Validator.isValidLottoNum(numbers)) return;
    if (!numbers.every((num) => Validator.isValidLottoType(num))) return;
    if (!Validator.isValidLottoRange(numbers)) return;
    if (Validator.isDuplicatedLotto(string)) return;
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
