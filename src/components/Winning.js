const { ERROR } = require('../data/constants');
const {
  checkInputForm,
  stringToNumberOfArray,
  isNotUnique,
  isAllExceedNumberRange,
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
}

module.exports = Winning;
