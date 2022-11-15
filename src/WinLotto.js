const Lotto = require('./Lotto');
const { ERROR } = require('./modules/Constant');

class WinLotto extends Lotto {
  constructor(numbers, bonus) {
    super(numbers);
    this.validateWin(numbers, bonus);
    this.bonus = bonus;
  }

  validateWin(numbers, bonus) {
    const numberReg = /^[0-9]*$/;
    if (!numberReg.test(bonus) || bonus < 1 || bonus > 45) {
      throw new Error(`${ERROR.COMMON} ${ERROR.MUST_IN_RANGE}`);
    }
    if (numbers.includes(bonus)) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_BONUS}`);
    }
  }
}

module.exports = WinLotto;
