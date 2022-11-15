const Constant = require("./Constant");
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    let uniqueNumbersLength = [...new Set(numbers)].length;
    if (numbers.length !== 6) {
      throw new Error(Constant.LOTTO_NUMBERS_LENGTH_SHOULD_BE6);
    }
    if (numbers.length !== uniqueNumbersLength) {
      throw new Error(Constant.LOTTO_NUMBERS_SHOULD_BE_UNIQUE);
    }
  }

  get numbers() {
    return this.#numbers;
  }

  compare(lottoNumbers) {
    let countArr = [];
    lottoNumbers.forEach((lottoNumber) => {
      countArr.push(this.compareBetween(lottoNumber));
    });
    return this.makeCountObject(countArr);
  }

  compareBetween(lottoNumber) {
    return lottoNumber.reduce((count, number) => {
      if (this.#numbers.includes(number)) {
        count += 1;
      }
      return count;
    }, 0);
  }

  makeCountObject(countArr) {
    return countArr.reduce((countObject, count) => {
      countObject[count] = (countObject[count] || 0) + 1;
      return countObject;
    }, {});
  }
}

module.exports = Lotto;
