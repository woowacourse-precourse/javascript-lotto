const { ERR_MSG } = require("./constants/constants");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = this.sortNumber(numbers);
  }
  validate(numbers) {
    const setNumbers = new Set(numbers);

    if (numbers.length !== 6) {
      throw new Error(ERR_MSG.notSixCount);
    }
    if (numbers.length !== setNumbers.size) {
      throw new Error(ERR_MSG.notUniqueNumber);
    }
    numbers.map((number) => {
      this.validNum(number);
    });
  }

  validNum(number) {
    if (isNaN(+number)) {
      throw new Error(ERR_MSG.notLottoNumber);
    }
    if (!(number >= 1 && number <= 45)) {
      throw new Error(ERR_MSG.notLottoRange);
    }
  }

  sortNumber(numbers) {
    return numbers.sort((a, b) => a - b);
  }

  getNumber() {
    return this.#numbers;
  }

  printString() {
    return "[" + this.#numbers.toString().replace(/,/g, ", ") + "]";
  }
}

module.exports = Lotto;
