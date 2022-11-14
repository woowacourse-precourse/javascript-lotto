const ErrorBoundary = require('./error/ErrorBoundary');
const { BONUS_ERROR_MESSAGE } = require('./constants/lotto');

const Bonus = class extends ErrorBoundary {
  #numbers;
  #bonus;

  constructor(numbers, bonus) {
    super();
    this.#numbers = numbers;
    this.#bonus = bonus;
    this.validateInput(this.#numbers, this.#bonus);
  }

  validate(numbers, bonus) {
    const isBonusNotDuplicated = numbers.includes(bonus);
    const isBonusRangeValid = bonus >= 1 && bonus <= 45;

    const isBonusValid = isBonusNotDuplicated && isBonusRangeValid;

    if (isBonusValid === true) {
      return { status: true };
    }

    const bonusErrorMessage = this.getBonusErrorMessage({
      isBonusNotDuplicated,
      isBonusRangeValid,
    });

    return { status: false, message: bonusErrorMessage };
  }

  getErrorMessage({ isBonusNotDuplicated, isBonusRangeValid }) {
    const { DUPLICATED, RANGE, DEFAULT } = BONUS_ERROR_MESSAGE;

    if (isBonusNotDuplicated) return DUPLICATED;
    if (isBonusRangeValid) return RANGE;

    return DEFAULT;
  }
};

module.exports = Bonus;
