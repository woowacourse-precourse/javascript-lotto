const { LOTTO, ERROR_MESSAGE } = require('../constants');
const { ValidationError } = require('../errors');

class LottoValidator {
  static validateLottoNumbers(numbers) {
    LottoValidator.#validateNumbers(numbers, ERROR_MESSAGE.LOTTO);
  }

  static validateWinningNumbers(numbers) {
    LottoValidator.#validateNumbers(numbers, ERROR_MESSAGE.WINNING_NUMBERS);
  }

  static validateBonusNumber(number, winningNumbers) {
    LottoValidator.#validateNumber(number, ERROR_MESSAGE.BONUS_NUMBER);
    LottoValidator.#validateNumbers(
      winningNumbers,
      ERROR_MESSAGE.WINNING_NUMBERS,
    );

    if (LottoValidator.#isIncluded(number, winningNumbers)) {
      throw new ValidationError(ERROR_MESSAGE.BONUS_NUMBER.VALUE);
    }
  }

  static #validateNumbers(numbers, errorMessage) {
    const validations = {
      LENGTH: LottoValidator.#hasValidLength,
      UNIQUE: LottoValidator.#hasUniqueValues,
      TYPE: LottoValidator.#hasNumberValuesOnly,
      RANGE: LottoValidator.#hasValidRangeValues,
    };

    Object.entries(validations).forEach(([key, validate]) => {
      if (!validate(numbers)) {
        throw new ValidationError(errorMessage[key]);
      }
    });
  }

  static #validateNumber(number, errorMessage) {
    const validations = {
      TYPE: LottoValidator.#isNumber,
      RANGE: LottoValidator.#isInRange,
    };

    Object.entries(validations).forEach(([key, validate]) => {
      if (!validate(number)) {
        throw new ValidationError(errorMessage[key]);
      }
    });
  }

  static #hasValidLength(numbers) {
    return numbers.length === LOTTO.NUMBER_COUNT;
  }

  static #hasUniqueValues(numbers) {
    return new Set(numbers).size === LOTTO.NUMBER_COUNT;
  }

  static #hasNumberValuesOnly(numbers) {
    return numbers.every((number) => LottoValidator.#isNumber(number));
  }

  static #isNumber(value) {
    return typeof value === 'number';
  }

  static #hasValidRangeValues(numbers) {
    return numbers.every((number) => LottoValidator.#isInRange(number));
  }

  static #isInRange(number) {
    return LOTTO.MIN_NUMBER <= number && number <= LOTTO.MAX_NUMBER;
  }

  static #isIncluded(number, array) {
    return array.includes(number);
  }
}

module.exports = LottoValidator;
