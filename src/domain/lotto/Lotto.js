const LottoNumber = require('./LottoNumber');
const InstanceException = require('../../exception/InstanceException');
const LottoHasDuplicatedException = require('../../exception/lotto/LottoHasDuplicatedException');
const LottoLengthException = require('../../exception/lotto/LottoLengthException');

class Lotto {
  static SIZE = 6;

  #numbers;

  constructor(numbers) {
    Lotto.validate(numbers);
    numbers.forEach(LottoNumber.validate);
    this.#numbers = numbers;
  }

  static validate(numbers) {
    if (numbers.length !== Lotto.SIZE) {
      throw new LottoLengthException(numbers.length);
    }
    if (new Set(numbers).size !== Lotto.SIZE) {
      throw new LottoHasDuplicatedException();
    }
  }

  static validateLotto(lotto) {
    if (!(lotto instanceof Lotto)) {
      throw new InstanceException('Lotto');
    }
  }

  countSameNumber(lotto) {
    Lotto.validateLotto(lotto);
    return this.#numbers.filter((number) => lotto.includes(number)).length;
  }

  includes(number) {
    return this.#numbers.some((value) => value === number);
  }

  getNumbers() {
    return this.#numbers;
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
