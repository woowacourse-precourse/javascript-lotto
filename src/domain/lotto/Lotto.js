const LottoHasDuplicatedException = require('../../exception/lotto/LottoHasDuplicatedException');
const LottoLengthException = require('../../exception/lotto/LottoLengthException');

class Lotto {
  static SIZE = 6;

  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== 6) {
      throw new LottoLengthException(numbers.length);
    }
    if (new Set(numbers).size !== 6) {
      throw new LottoHasDuplicatedException();
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
