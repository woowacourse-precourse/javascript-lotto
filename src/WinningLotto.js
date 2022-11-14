const Exception = require('./Exception');
const { ERROR } = require('./consts/Message');
const { LOTTO } = require('./consts/LottoSystem');

class WinningLotto {
  lotto;
  bonus;

  constructor(lotto, bonus) {
    this.lotto = lotto;
    this.handleBonusException(bonus);
    this.bonus = bonus;
  }

  getNumbers() {
    return this.lotto.getNumbers();
  }

  getBonusNumber() {
    return this.bonus;
  }

  handleBonusException(bonus) {
    const {
      BONUS: { INTEGER, UNIQUE, RANGE },
    } = ERROR;

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
