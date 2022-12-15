const { LOTTO_NUMBER } = require('../constant/LottoNumbers');
const Validation = require('./Validation');

class Lotto {
  #numbers;

  constructor(numbers) {
    this.#numbers = numbers;
    this.#checkStringValidation(this.#numbers);
    this.#checkArrayValidaton(this.#numbers.split(LOTTO_NUMBER.DIVISION));
  }

  #checkStringValidation(value) {
    new Validation(value).getStringValidator().isSplit(LOTTO_NUMBER.DIVISION).getMessages();
  }

  #checkArrayValidaton(value) {
    new Validation(value)
      .getArrayValidator()
      .isArrayElementNumber()
      .isLength(LOTTO_NUMBER.LENGTH)
      .isRepeated(LOTTO_NUMBER.LENGTH)
      .isNumberRange([LOTTO_NUMBER.START_RANGE, LOTTO_NUMBER.END_RANGE])
      .isStartWith(LOTTO_NUMBER.BAN_START_WITH)
      .getMessages();
  }

  // TODO: 추가 기능 구현
}

module.exports = Lotto;
