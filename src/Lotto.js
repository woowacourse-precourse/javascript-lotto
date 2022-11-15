const Constant = require("./components/Constant");
const NumberValidator = require("./components/NumberValidator");

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

    if (this.hasDuplicate(numbers)) {
      throw new Error(Constant.DUPLICATE_ERROR);
    }

    const numberValidator = new NumberValidator(this.numberArray);
    if (numberValidator.confirm(numbers)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }
  }

  hasDuplicate(numbers) {
    return [...new Set(numbers)].length !== 6;
  }
}

module.exports = Lotto;
