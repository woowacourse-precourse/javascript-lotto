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

  static caculateLottoNumPerUnit(price, unit = 1000) {
    return Math.floor(price / unit);
  }
}

module.exports = Lotto;
