const {
  isOutOfRangeAndThrowError,
  isDuplicatedAndThrowError,
  isOutOfVolumeAndThrowError,
} = require('./utils/inputValidate');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    isOutOfVolumeAndThrowError(numbers, 6);
    isDuplicatedAndThrowError(numbers);
    isOutOfRangeAndThrowError(numbers);
  }
}

module.exports = Lotto;
