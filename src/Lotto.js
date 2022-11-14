const {
  isValuesValidLength,
  isValuesValidUnique,
  isValuesValidRange,
} = require("./utils/index");
const { ERROR_MESSAGE } = require("./constants/index");

class Lotto {
  #numbers;

  constructor(numbers) {
    this.validate(numbers);
    this.#numbers = numbers;
  }

  validate(numbers) {
    if (!isValuesValidLength(numbers)) throw ERROR_MESSAGE.LENGTH_ERROR;
    if (!isValuesValidUnique(numbers)) throw ERROR_MESSAGE.LOTTO_UNIQUE_ERROR;
    if (!isValuesValidRange(numbers)) throw ERROR_MESSAGE.RANGE_ERROR;
  }
  // TODO: 추가 기능 구현
  getLottoNumbers() {
    return this.#numbers;
  }
}

module.exports = Lotto;
