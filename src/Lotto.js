const { lottoNumberError } = require('./Constants/ErrorMessages');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(lottoNumberError.NOT_SIX);
    }
    if (numbers.length !== [...new Set(numbers)].length) {
      throw new Error(lottoNumberError.NUMBER_DUPLICATION);
    }
    if (
      numbers.length !==
      numbers.filter((number) => number >= 1 && number <= 45).length
    ) {
      throw new Error(lottoNumberError.NOT_VALID_NUMBER_SCOPE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
