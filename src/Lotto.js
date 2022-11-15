const { LOTTO_NUMBER_ERROR } = require('./Const');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }

    let numbersSet = new Set(numbers);
    if (numbersSet.size !== numbers.length) {
      throw new Error(LOTTO_NUMBER_ERROR);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
