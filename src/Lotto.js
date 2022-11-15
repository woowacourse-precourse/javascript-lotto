const { ANNOUNCE, GRADE, ERROR } = require('./constants/constants');

class Lotto {
  #numbers;
  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    const checkOverlap = () => new Set(numbers).size === 6;
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
    if (numbers.filter((number) => 1 <= number && number <= 45).length != 6) {
      throw new Error('[ERROR] 로또 번호는 1에서 45 사이의 숫자입니다.');
    }
    if (!checkOverlap()) {
      throw new Error('[ERROR] 로또 번호에 중복된 숫자가 있습니다.');
    }
  }
}

module.exports = Lotto;
