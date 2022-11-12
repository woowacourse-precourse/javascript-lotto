const { NUMBER } = require('./utils/constants');

class WinningChecker {
  constructor(lottoNumbers, winningNumbers, bonusNumber) {
    this.lottoNumbers = lottoNumbers;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.countOfSameNum = this.countSameNum();
    this.hasBonusNum = this.hasBonusNum();
    this.winningRank = this.findWinningRank();
  }

  countSameNum() {
    let sum = 0;
    this.lottoNumbers.forEach((number) => {
      if (this.winningNumbers.includes(number)) sum += 1;
    });
    return sum;
  }

  hasBonusNum() {
    if (this.lottoNumbers.includes(this.bonusNumber)) {
      return true;
    }
    return false;
  }

  findWinningRank() {
    if (this.countOfSameNum === NUMBER.TO_WIN_FIRST_PLACE) {
      return NUMBER.FIRST_PLACE;
    }
    if (
      this.countOfSameNum === NUMBER.TO_WIN_SECOND_PLACE &&
      this.hasBonusNum
    ) {
      return NUMBER.SECOND_PLACE;
    }
    if (
      this.countOfSameNum === NUMBER.TO_WIN_SECOND_PLACE &&
      !this.hasBonusNum
    ) {
      return NUMBER.THIRD_PLACE;
    }
    if (this.countOfSameNum === NUMBER.TO_WIN_FOURTH_PLACE) {
      return NUMBER.FOURTH_PLACE;
    }
    if (this.countOfSameNum === NUMBER.TO_WIN_FIFTH_PLACE) {
      return NUMBER.FIFTH_PLACE;
    }
    return null;
  }

  getWinningRank() {
    return this.winningRank;
  }
}

module.exports = WinningChecker;
