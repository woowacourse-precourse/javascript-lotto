const { BONUS_NUM_ERROR } = require('../constant/errorMessage');

class BonusNum {
  constructor(winNums, bonusNum) {
    this.isInRange(bonusNum);
    this.isInteger(bonusNum);
    this.isNum(bonusNum);
    this.isInWinNums(winNums, bonusNum);
  }

  isInRange(bonusNum) {
    if (bonusNum < 1 || bonusNum > 45) {
      throw new Error(BONUS_NUM_ERROR.CHECK_RANGE);
    }
  }

  isInteger(bonusNum) {
    if (+bonusNum % 1 !== 0) {
      throw new Error(BONUS_NUM_ERROR.CHECK_ISINTEGER);
    }
  }

  isNum(bonusNum) {
    const splitBonusNum = bonusNum.split('');
    splitBonusNum.map((el) => {
      if (isNaN(el) || el === ' ') {
        throw new Error(BONUS_NUM_ERROR.CHECK_ISNUMBER);
      }
    });
  }

  isInWinNums(winNums, bonusNum) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map((winNum) => {
      if (winNum === bonusNum) {
        throw new Error(BONUS_NUM_ERROR.CHECK_OVERLAP);
      }
    });
  }
}

module.exports = BonusNum;
