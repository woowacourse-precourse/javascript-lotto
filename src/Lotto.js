const LottoNumberError = require('./Constants/Messages');
class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (numbers.length !== 6) {
      throw new Error(LottoNumberError.NOT_SIX);
    }
    if (numbers < 1 || numbers > 45) {
      throw new Error(LottoNumberError.NOT_DIVIDED_BY_COMMA);
    }
    if (numbers !== numbers.filter((number) => number >= 1 && number <= 45)) {
      throw new Error(LottoNumberError.NOT_VALID_NUMBER_SCOPE);
    }
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
