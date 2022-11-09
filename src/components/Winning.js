const { ERROR } = require('../data/constants');
const {
  checkInputForm,
  stringToNumberOfArray,
  isNotUnique,
  isAllExceedNumberRange,
  exceedNumberRange,
  checkInputBonusForm,
  checkOverlapToArray,
} = require('../utils/winningNumberValidate');

class Winning {
  winningNumber;

  constructor(winningString) {
    this.validate(winningString);

    this.winningNumber = stringToNumberOfArray(winningString);
  }

  validate(winningString) {
    if (!checkInputForm(winningString)) throw new Error(ERROR.NUMBER_WAY);

    const arrayOfWinningNumbers = stringToNumberOfArray(winningString);

    if (!isNotUnique(arrayOfWinningNumbers)) throw new Error(ERROR.NOT_UNIQUE);
    if (!isAllExceedNumberRange(arrayOfWinningNumbers))
      throw new Error(ERROR.RANGE);
  }

  inputBonus(bonusNumber) {
    this.validateBonus(bonusNumber);

    this.winningNumber.push(parseInt(bonusNumber));
  }

  validateBonus(bonusNumber) {
    if (!checkInputBonusForm(bonusNumber)) throw new Error(ERROR.BONUS_COUNT);
    if (!exceedNumberRange(bonusNumber)) throw new Error(ERROR.RANGE);
    if (checkOverlapToArray(parseInt(bonusNumber), this.winningNumber))
      throw new Error(ERROR.NOT_UNIQUE);
  }
}

module.exports = Winning;
