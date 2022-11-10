const LottoNumberRangeException = require('../../exception/lotto/LottoNumberRangeException');

class Lotto {
  static SIZE = 6;

  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoNumberRangeException(numbers.length);
    }
  }
  // TODO: 추가 기능 구현

  static of(numbers) {
    return new Lotto(numbers);
  }

  countSameNumber(lotto) {

  }

  includes(number) {
    
  }
}

module.exports = Lotto;
