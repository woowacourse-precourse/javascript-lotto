const { MESSAGE, CONSTANT } = require('./Constant');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.overlapValidate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== CONSTANT.LOTTO_LIMIT) {
      throw Error(MESSAGE.NUMBER_ERROR);
    }
  }

  // TODO: 추가 기능 구현
  overlapValidate(numbers) {
    let numbersSet = new Set(numbers);
    let numbersSetCopy = [...numbersSet];
    if (numbersSetCopy.length !== CONSTANT.LOTTO_LIMIT) {
      throw Error(MESSAGE.NUMBER_DIFF_ERROR);
    }
  }
}
module.exports = Lotto;