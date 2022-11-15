const { ERROR_MESSAGE } = require("./constants");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    this.validateDuplication(numbers);
    this.validateIsNaN(numbers);
    this.validateRange(numbers);
  }

  getNumbers() {
    return this.#numbers;
  }
  
  validateDuplication(numbers) {
    const numbersSet = new Set(numbers);
    if(numbersSet.size !== 6) {
      throw ERROR_MESSAGE.LOTTO_DUPLCATION_ERROR;
    }
  }

  validateIsNaN(numbers) {
    numbers.forEach((number) => {
      if(isNaN(number)){
        throw ERROR_MESSAGE.LOTTO_IS_NAN_ERROR;
      }
    });
  }

  validateRange(numbers) {
    numbers.forEach((number) => {
      if(number < 1 || number > 45){
        throw ERROR_MESSAGE.LOTTO_RANGE_ERROR;
      }
    });
  }
}

module.exports = Lotto;
