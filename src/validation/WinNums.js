const { WIN_NUMS_ERROR } = require('../constant/errorMessage');

class WinNums {
  constructor(winNums) {
    this.isInRange(winNums);
    this.isOverlap(winNums);
    this.isNumsCountSix(winNums);
    this.isBlankOrSpot(winNums);
    this.isInteger(winNums);
  }

  isInRange(winNums) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map(winNum => {
      if (winNum < 1 || winNum > 45) {
        throw new Error(WIN_NUMS_ERROR.CHECK_RANGE);
      }
    });
  }

  isOverlap(winNums) {
    const winNumsArr = winNums.split(',');
    const set = new Set(winNumsArr);
    if (set.size < winNumsArr.length) {
      throw new Error(WIN_NUMS_ERROR.CHECK_OVERLAP);
    }
  }

  isNumsCountSix(winNums) {
    const winNumsArr = winNums.split(',');
    if (winNumsArr.length !== 6) {
      throw new Error(WIN_NUMS_ERROR.CHECK_COUNT);
    }
  }

  isBlankOrSpot(winNums) {
    const winNumsArr = winNums.split('');
    winNumsArr.map(el => {
      if (el === '.' || el === ' ') {
        throw new Error(WIN_NUMS_ERROR.CHECK_BLANK_OR_DOT);
      }
    });
  }

  isInteger(winNums) {
    const winNumsArr = winNums.split(',');
    winNumsArr.map(winNum => {
      if (+winNum % 1 !== 0) {
        throw new Error(WIN_NUMS_ERROR.CHECK_ISINTEGER);
      }
    });
  }
}

module.exports = WinNums;
