const Lotto = require('../Lotto');
const {
  ERROR_MESSAGE,
  RESTRICTIONS,
} = require('../components/lotto-data/Constant');

class Winning extends Lotto {
  constructor(winning) {
    super(winning);
    this.input;
  }

  checkNumbers() {
    super.splitNumbers();
    this.input = super.returnNumbers();
    this.checkDistinguishedByCommas();
    super.checkSixWinningNumbers();
    super.checkOnlyNumbers();
    super.checkNumberRangesFrom1To45ForArray();
    return super.checkDuplicates();
  }

  checkDistinguishedByCommas() {
    if (this.input.length === RESTRICTIONS.noComma) {
      throw `${ERROR_MESSAGE.notComma}`;
    }
  }
}

module.exports = Winning;
