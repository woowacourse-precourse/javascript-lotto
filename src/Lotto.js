const { LOTTO_ERROR } = require("./constants/Constants.js");


class Lotto {
  #numbers;
  
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LOTTO_ERROR.LENGTH);
    }
    if (new Set(numbers).size !== 6) {
      throw new Error(LOTTO_ERROR.DUPLICATE);
    }
    if (isNaN(numbers.join(''))) {
      console.log(isNaN(numbers))
      throw new Error(LOTTO_ERROR.NUMBER);
    }
    if (numbers.some(number => number < 1 || number > 45)) {
      throw new Error(LOTTO_ERROR.RANGE);
    }
  }
  // TODO: 추가 기능 구현
}

module.exports = Lotto;
