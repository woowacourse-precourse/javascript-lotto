const { BONUS_NUM_ERROR } = require('../constant/errorMessage');
const STRING = require('../constant/string');
const NUMBER = require('../constant/number');


class BonusNum {
  constructor(winNums, bonusNum) {
    this.isInRange(bonusNum);
    this.isInteger(bonusNum);
    this.isNum(bonusNum);
    this.isInWinNums(winNums, bonusNum);
  }

  isInRange(bonusNum) {
    if (bonusNum < NUMBER.START_NUM || bonusNum > NUMBER.END_NUM) {
      throw new Error(BONUS_NUM_ERROR.CHECK_RANGE);
    }
  }

  isInteger(bonusNum) {
    if (+bonusNum % 1 !== NUMBER.ZERO) {
      throw new Error(BONUS_NUM_ERROR.CHECK_ISINTEGER);
    }
  }

  isNum(bonusNum) {
    const splitBonusNum = bonusNum.split(STRING.BLANK);
    splitBonusNum.map(el => {
      if (isNaN(el) || el === STRING.SPACE) {
        throw new Error(BONUS_NUM_ERROR.CHECK_ISNUMBER);
      }
    });
  }

  isInWinNums(winNums, bonusNum) {
    const winNumsArr = winNums.split(STRING.COMMA);
    winNumsArr.map(winNum => {
      if (winNum === bonusNum) {
        throw new Error(BONUS_NUM_ERROR.CHECK_OVERLAP);
      }
    });
  }
}

module.exports = BonusNum;
