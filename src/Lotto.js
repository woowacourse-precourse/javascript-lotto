const MESSAGE = require('./MESSAGE');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!this.isLengthSix(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.LENGTH);
    if (!this.isNumber(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.NUMBER);
    if (!this.isValidRange(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.RANGE);
    if (!this.isUnique(numbers)) throw new Error(MESSAGE.ERROR.LOTTO.DUPLICATE);
  }

  isLengthSix(numbers) {
    return numbers.length === 6;
  }

  isNumber(numbers) {
    let numberStyle = /^[0-9]+$/;
    let isNumberMethod = (num) => numberStyle.test(num);
    return numbers.every(isNumberMethod);
  }

  isUnique(numbers) {
    let isUniqueMethod = (num) =>
      numbers.indexOf(num) !== numbers.lastIndexOf(num);
    return !numbers.some(isUniqueMethod);
  }

  isValidRange(numbers) {
    let isValidRangeMethod = (num) => num >= 1 && num <= 45;
    return numbers.every(isValidRangeMethod);
  }
}

module.exports = Lotto;
