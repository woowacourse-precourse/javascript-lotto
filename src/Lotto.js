const Error = require("./ErrorMessage.js")

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers !== undefined && numbers.length !== 6) {
      throw Error.LENGTH_ERROR;
    }
    else if(numbers !== undefined && new Set(numbers).size!=6){
      throw Error.DUPLICATE_ERROR
    }
  }
  validateInputRange(max,min){
    if (max > 45 || min < 1){
      throw Error.RANGE_ERROR
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
