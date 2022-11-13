const INPUT_ERROR = require('./Constants');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.isDuplicated(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw INPUT_ERROR.LESS_THAN_EXPECTED;
    }
  }

  isDuplicated(numbers) {
    const set = new Set(numbers);
    if(numbers.length != set.size){
      throw INPUT_ERROR.DUPLICATED;
    }
  }
  
}

module.exports = Lotto;
