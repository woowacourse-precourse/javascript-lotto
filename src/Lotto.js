const Constant = require("./components/Constant");

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

    if (this.isWrongRange(numbers)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }

    if (this.isNotNumber(numbers)) {
      throw new Error(Constant.WRONG_NUMBER_ERROR);
    }
  }

  hasDuplicate(numbers) {
    return [...new Set(numbers)].length !== 6;
  }

  isWrongRange(numbers) {
    return numbers.map((number) => this.checkRange(number));
  }

  checkRange(number) {
    if (Number(number) < 1 || Number(number) > 45) {
      return true;
    }
    return false;
  }

  isNotNumber(numbers) {
    return numbers.map((number) => this.checkNumber(number));
  }

  checkNumber(number) {
    if (!Number(number)) {
      return true;
    }
    return false;
  }
}

module.exports = Lotto;
