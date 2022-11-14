const ErrorInfo = require('./ErrorInfo');

const checkError = new ErrorInfo();
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    checkError.notSixNumberError(numbers);
    checkError.overlapNumberError(numbers);
    [...numbers].forEach((number) => {
      checkError.numberRangeError(number);
      checkError.notNumberError(number);
    });
  }

  getNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
