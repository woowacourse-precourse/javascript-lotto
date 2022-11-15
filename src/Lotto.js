const {  VALIDATE_NUMBER, ERROR_MESSAGE } = require('./utils/Constants'); 
class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.validate(numbers);
  }

  validate(numbers) {
    this.checkLength(numbers);
    this.checkDuplicate(numbers);
    this.checkRange(numbers);
  }
  checkLength(numbers) {
    if (numbers.length !== VALIDATE_NUMBER.len) {
      throw new Error(ERROR_MESSAGE.len);
    }
  }

  checkDuplicate(numbers) {
    if (new Set(numbers).size < VALIDATE_NUMBER.len) {
      throw new Error(ERROR_MESSAGE.duplicate);
    }
  }

  checkRange(numbers) {
    numbers.forEach(num => {
      if (num > VALIDATE_NUMBER.end || num < VALIDATE_NUMBER.start) {
        throw new Error(ERROR_MESSAGE.range);
      }
    });
  }
}

module.exports = Lotto;
