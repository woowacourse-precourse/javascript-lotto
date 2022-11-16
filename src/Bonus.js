const ErrorBoundary = require('./error/ErrorBoundary');
const { BONUS_ERROR_MESSAGE } = require('./constants/lotto');

const Bonus = class extends ErrorBoundary {
  #winningNumbers;
  #bonus;

  constructor({ winningNumbers, bonus }) {
    super();

    this.#winningNumbers = winningNumbers;
    this.#bonus = bonus;
    this.validateInput({ winningNumbers: this.#winningNumbers, bonus: this.#bonus });
  }

  validate({ winningNumbers, bonus }) {
    const isBonusNotDuplicated = winningNumbers.includes(bonus) === false;
    const isBonusRangeValid = bonus >= 1 && bonus <= 45;

    const isBonusValid = isBonusNotDuplicated && isBonusRangeValid;

    if (isBonusValid) return { status: true };

    const bonusErrorMessage = this.getErrorMessage({ isBonusNotDuplicated, isBonusRangeValid });
    return { status: false, message: bonusErrorMessage };
  }

  getErrorMessage({ isBonusNotDuplicated, isBonusRangeValid }) {
    const { DUPLICATED, RANGE, DEFAULT } = BONUS_ERROR_MESSAGE;

    if (!isBonusNotDuplicated) return DUPLICATED;
    if (!isBonusRangeValid) return RANGE;

    return DEFAULT;
  }
};

module.exports = Bonus;
