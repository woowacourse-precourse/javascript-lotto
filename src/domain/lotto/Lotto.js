const LottoNumber = require('./LottoNumber');
const Validation = require('../../util/Validation');
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
    Lotto.validateLottoLength(numbers);
    Lotto.validateDuplicated(numbers);
  }

  static validateLottoLength(numbers) {
    Validation.validate({
      condition: numbers.length !== Lotto.SIZE,
      exception: new LottoLengthException(numbers.length),
    });
  }

  static validateDuplicated(numbers) {
    Validation.validate({
      condition: new Set(numbers).size !== Lotto.SIZE,
      exception: new LottoHasDuplicatedException(),
    });
  }

  countSameNumber(lotto) {
    Validation.checkInstance(lotto, Lotto);
    return this.#numbers.filter((number) => lotto.includes(number)).length;
  }

  includes(number) {
    return this.#numbers.some((value) => value === number);
  }

  toString() {
    return `[${this.#numbers.join(', ')}]`;
  }
}

module.exports = Lotto;
