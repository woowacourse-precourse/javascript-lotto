const { ERROR, LOTTO_NUMBER } = require('./Contants.js');

class BonusNumber {
  constructor(lotto, number) {
    this.userLotto = lotto;
    this.checkBonusIsNumber(number);
    this.checkBonusRange(number);
    this.checkBonusOverlap(number);
  }

  checkBonusIsNumber(number) {
    if (isNaN(number)) {
      throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
    }
  }

  checkBonusRange(number) {
    if (number < LOTTO_NUMBER.MIN_RANGE || number > LOTTO_NUMBER.MAX_RANGE) {
      throw new Error(ERROR.CHECK_BONUS_IS_NUMBER);
    }
  }

  checkBonusOverlap(number) {
    if (this.userLotto.includes(+number)) {
      throw new Error(ERROR.CHECK_BONUS_OVERLAP);
    }
  }
}
module.exports = BonusNumber;
