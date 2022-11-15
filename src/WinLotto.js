const Lotto = require('./Lotto');
const { ERROR } = require('./modules/Constant');

class WinLotto extends Lotto {
  constructor(numbers, bonus) {
    super(numbers);
    this.validate(numbers, bonus);
    this.bonus = bonus;
  }
  validate(numbers, bonus) {
    super.validate(numbers);
    const numberReg = /^[0-9]*$/;
    if (!numberReg.test(bonus) || number < 1 || number > 45) {
      throw new Error(`${ERROR.COMMON} ${ERROR.MUST_IN_RANGE}`);
    }
    if (numbers.includes(bonus)) {
      throw new Error(`${ERROR.COMMON} ${ERROR.CANT_OVERLAP_BONUS}`);
    }
  }
}

module.exports = WinLotto;
