const Lotto = require('./Lotto');
const { GAME, ERROR } = require('./modules/Constant');

class WinLotto extends Lotto {
  constructor(numbers, bonus) {
    super(numbers);
    this.validateWin(numbers, bonus);
    this.bonus = bonus;
  }

  validateWin(numbers, bonus) {
    const numberReg = /^[0-9]*$/;
    if (!numberReg.test(bonus) || bonus < GAME.START || bonus > GAME.END) {
      throw new Error(`${ERROR.COMMON} ${ERROR.MUST_IN_RANGE}`);
    }
    if (numbers.includes(bonus)) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_BONUS}`);
    }
  }
}

module.exports = WinLotto;
