const Constants = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isDuplicated(numbers);
    this.isNumber(numbers);
    this.isInRange(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw Constants.INPUT_ERROR.LESS_THAN_EXPECTED;
    }
  }

  isDuplicated(numbers) {
    const set = new Set(numbers);
    if(numbers.length != set.size){
      throw Constants.INPUT_ERROR.DUPLICATED;
    }
  }

  isNumber(numbers) {
    numbers.forEach(number => {
      if(isNaN(number)){
        throw Constants.INPUT_ERROR.NOT_NUMBER;
      }
    })
  }

  isInRange(numbers) {
    numbers.forEach(number => {
      if(Number(number) < 1 || Number(number) > 45){
        throw Constants.INPUT_ERROR.NOT_IN_RANGE
      }
    })
  }
}

module.exports = Lotto;
