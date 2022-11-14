const { WIN_NUMS_ERROR } = require('../constant/errorMessage');
const STRING = require('../constant/string');
const NUMBER = require('../constant/number');

class WinNums {
  constructor(winNums) {
    this.isInRange(winNums);
    this.isOverlap(winNums);
    this.isNumsCountSix(winNums);
    this.isBlankOrSpot(winNums);
    this.isInteger(winNums);
  }

  isInRange(winNums) {
    const winNumsArr = winNums.split(STRING.COMMA);
    winNumsArr.map(winNum => {
      if (winNum < NUMBER.START_NUM || winNum > NUMBER.END_NUM) {
        throw new Error(WIN_NUMS_ERROR.CHECK_RANGE);
      }
    });
  }

  isOverlap(winNums) {
    const winNumsArr = winNums.split(STRING.COMMA);
    const set = new Set(winNumsArr);
    if (set.size < winNumsArr.length) {
      throw new Error(WIN_NUMS_ERROR.CHECK_OVERLAP);
    }
  }

  isNumsCountSix(winNums) {
    const winNumsArr = winNums.split(STRING.COMMA);
    if (winNumsArr.length !== NUMBER.LOTTO_CORRECT_COUNT) {
      throw new Error(WIN_NUMS_ERROR.CHECK_COUNT);
    }
  }

  isBlankOrSpot(winNums) {
    const winNumsArr = winNums.split(STRING.BLANK);
    winNumsArr.map(el => {
      if (el === STRING.DOT || el === STRING.SPACE) {
        throw new Error(WIN_NUMS_ERROR.CHECK_BLANK_OR_DOT);
      }
    });
  }

  isInteger(winNums) {
    const winNumsArr = winNums.split(STRING.COMMA);
    winNumsArr.map(winNum => {
      if (+winNum % 1 !== NUMBER.ZERO) {
        throw new Error(WIN_NUMS_ERROR.CHECK_ISINTEGER);
      }
    });
  }
}

module.exports = WinNums;
