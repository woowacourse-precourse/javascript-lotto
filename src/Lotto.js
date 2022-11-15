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
    return numbers.find(this.checkRange);
  }

  checkRange(number) {
    return number < 1 || number > 45;
  }

  isNotNumber(numbers) {
    return numbers.find(this.checkNumber);
  }

  checkNumber(number) {
    return !Number(number);
  }
}

module.exports = Lotto;
