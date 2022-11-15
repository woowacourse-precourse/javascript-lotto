const Lotto = require('./Lotto');
const { GAME, ERROR } = require('./modules/Constant');
const validateNumber = require('./modules/validation');

class WinLotto extends Lotto {
  constructor(numbers, bonus) {
    super(numbers);
    this.validateWin(numbers, bonus);
    this.bonus = bonus;
  }

  validateWin(numbers, bonus) {
    if (!validateNumber(bonus) || bonus < GAME.START || bonus > GAME.END) {
      throw new Error(`${ERROR.COMMON} ${ERROR.MUST_IN_RANGE}`);
    }
    if (numbers.includes(bonus)) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_BONUS}`);
    }
  }
}

module.exports = WinLotto;
