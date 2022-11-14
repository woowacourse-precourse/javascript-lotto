const Exception = require('./Exception');

class WinningLotto {
  lotto;
  bonus;

  constructor(lotto, bonus) {
    this.lotto = lotto;
    this.handleBonusException(bonus);
    this.bonus = bonus;
  }

  handleBonusException(bonus) {
    const {
      ERROR: {
        BONUS: { INTEGER, UNIQUE, RANGE },
      },
    } = MESSAGE;

    switch (false) {
      case this.isInteger(bonus):
        throw Exception.error(INTEGER);
      case this.isUnique(bonus):
        throw Exception.error(UNIQUE);
      case this.isInRange(bonus):
        throw Exception.error(RANGE);
    }
  }

  isInteger(bonus) {
    if (Number.isInteger(bonus)) {
      return true;
    }

    return false;
  }

  isUnique(bonus) {
    const winningNumbers = this.lotto.getNumbers();

    if (winningNumbers.includes(bonus)) {
      return false;
    }

    return true;
  }

  isInRange(bonus) {
    if (bonus < LOTTO.START_NUMBER || bonus > LOTTO.END_NUMBER) {
      return false;
    }

    return true;
  }
}

module.exports = WinningLotto;
