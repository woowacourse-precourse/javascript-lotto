const LottoNumberValidator = require('../LottoNumberValidator/LottoNumberValidator');

class LottoNumbersValidator {
  static #lottoNumberValidator = LottoNumberValidator;

  static execute(numbers) {
    LottoNumbersValidator.#hasLottoNumber(numbers);
    LottoNumbersValidator.#hasLength(numbers);
    LottoNumbersValidator.#hasDuplicate(numbers);
  }

  static #hasLottoNumber(numbers) {
    numbers.forEach((number) => LottoNumbersValidator.#lottoNumberValidator.execute(number));
  }

  static #hasLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }

  static #hasDuplicate(numbers) {
    const DUPLICATE_INDEX = numbers.findIndex(
      (number, index, array) => array.indexOf(number) !== index
    );

    if (DUPLICATE_INDEX !== -1) {
      throw new Error('[ERROR] 로또 번호는 중복이 없어야 합니다.');
    }
  }
}

module.exports = LottoNumbersValidator;
