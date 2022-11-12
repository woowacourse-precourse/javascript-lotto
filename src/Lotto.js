const ErrorBoundary = require('./error/ErrorBoundary');
const { LOTTO_ERROR_MESSAGE } = require('./constants/lotto');

const Lotto = class extends ErrorBoundary {
  #numbers;

  constructor(numbers) {
    super();
    this.#numbers = numbers;
    this.setup();
  }

  setup() {
    const validateLottoCallback = () => this.validate(this.#numbers);
    this.errorLogger.onCallback(validateLottoCallback);
  }

  validate(numbers) {
    const isNumberLengthValid = numbers.length === 6;
    const isNumberRangeDuplicated = numbers.length === [...new Set(numbers)].length;
    const isNumberRangeValid = numbers.every(number => number >= 1 && number <= 45);

    const isLottoIsValid = isNumberLengthValid && isNumberRangeDuplicated && isNumberLengthValid;
    if (isLottoIsValid === true) {
      return { status: true };
    }

    const lottoErrorMessage = this.getLottoErrorMessage({
      isNumberLengthValid,
      isNumberRangeDuplicated,
      isNumberRangeValid,
    });

    return { status: false, message: lottoErrorMessage };
  }

  getLottoErrorMessage({ isNumberLengthValid, isNumberRangeDuplicated, isNumberRangeValid }) {
    if (isNumberLengthValid === false) return LOTTO_ERROR_MESSAGE.LENGTH;
    if (isNumberRangeDuplicated === false) return LOTTO_ERROR_MESSAGE.DUPLICATED;
    if (isNumberRangeValid === false) return LOTTO_ERROR_MESSAGE.RANGE;
  }
};

module.exports = Lotto;
