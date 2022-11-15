const ErrorBoundary = require('./error/ErrorBoundary');
const { LOTTO_ERROR_MESSAGE } = require('./constants/lotto');

const Lotto = class extends ErrorBoundary {
  #numbers;

  constructor(numbers) {
    super();
    this.#numbers = numbers;
    this.validateInput(this.#numbers);
  }

  validate(numbers) {
    const isNumberLengthValid = numbers.length === 6;
    const isNumberNotDuplicated = numbers.length === [...new Set(numbers)].length;
    const isNumberRangeValid = numbers.every(number => number >= 1 && number <= 45);

    const isLottoValid = isNumberLengthValid && isNumberNotDuplicated && isNumberRangeValid;
    if (isLottoValid) {
      return { status: true };
    }

    const lottoErrorMessage = this.getErrorMessage({
      isNumberLengthValid,
      isNumberNotDuplicated,
      isNumberRangeValid,
    });

    return { status: false, message: lottoErrorMessage };
  }

  getErrorMessage({ isNumberLengthValid, isNumberNotDuplicated, isNumberRangeValid }) {
    const { LENGTH, DUPLICATED, RANGE, DEFAULT } = LOTTO_ERROR_MESSAGE;

    if (!isNumberLengthValid) return LENGTH;
    if (!isNumberNotDuplicated) return DUPLICATED;
    if (!isNumberRangeValid) return RANGE;

    return DEFAULT;
  }
};

module.exports = Lotto;
