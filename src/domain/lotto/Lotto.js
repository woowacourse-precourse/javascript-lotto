const LottoHasDuplicatedException = require('../../exception/lotto/LottoHasDuplicatedException');
const LottoLengthException = require('../../exception/lotto/LottoLengthException');
const LottoNumber = require('./LottoNumber');

class Lotto {
  static SIZE = 6;

  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    this.#numbers = numbers.map(Lotto.#toLottoNumber);
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

  static #toLottoNumber(number) {
    return LottoNumber.of(number);
  }

  countSameNumber(lotto) {
    return this.#numbers.filter((number) => lotto.includes(number.getNumber())).length;
  }

  includes(number) {
    return this.#numbers.some((value) => value.getNumber() === number);
  }
}

module.exports = Lotto;
