const { ERROR, NUMBER } = require('../data/constants');
const { setArray } = require('../utils/utils');
const {
  isNotUnique,
  isExceedRange,
  isAllExceedRange,
  isMatchForm,
  isMatchFormBonus,
  isOverlap,
} = require('../utils/validate');

class Winning {
  winningNumber;

  constructor(winningString) {
    this.validate(winningString);

    this.winningNumber = setArray(winningString);
  }

  validate(winningString) {
    if (!isMatchForm(winningString)) throw new Error(ERROR.NUMBER_WAY);

    const winningNumArr = setArray(winningString);
    if (!isNotUnique(winningNumArr)) throw new Error(ERROR.NOT_UNIQUE);
    if (!isAllExceedRange(winningNumArr, NUMBER.START_LOTTO, NUMBER.END_LOTTO))
      throw new Error(ERROR.RANGE);
  }

  setBonusNum(bonusNumber) {
    this.validateBonus(bonusNumber);

    this.winningNumber.push(parseInt(bonusNumber));
  }

  validateBonus(bonusNumber) {
    if (!isMatchFormBonus(bonusNumber)) throw new Error(ERROR.BONUS_COUNT);
    if (!isExceedRange(bonusNumber, NUMBER.START_LOTTO, NUMBER.END_LOTTO))
      throw new Error(ERROR.RANGE);
    if (isOverlap(parseInt(bonusNumber), this.winningNumber))
      throw new Error(ERROR.NOT_UNIQUE);
  }
}

module.exports = Winning;
