const Lotto = require('../Lotto');
const { LottoNumberData } = require('../components/lotto-data/LottoNumberData');
// constant
const { ERROR_MESSAGE } = require('../components/lotto-data/Constant');

class Bonus extends Lotto {
  constructor(bonus) {
    super(bonus);
    this.input = super.returnNumbers();
  }

  checkNumber() {
    super.checkOnlyNumber();
    super.checkNumberRangesFrom1To45();
    return this.checkOverlapsWithWinningNumber();
  }

  checkOverlapsWithWinningNumber() {
    if (LottoNumberData.Winning.includes(this.input)) {
      throw `${ERROR_MESSAGE.hasDuplicationWithWinning}`;
    }
    return this.input;
  }
}

module.exports = Bonus;
