const {
  FIRST_PLACE_NUMBER,
  SECOND_PLACE_NUMBER,
  THIRD_PLACE_NUMBER,
  FOURTH_PLACE_NUMBER,
  FIFTH_PLACE_NUMBER,
  AMOUNT_OF_FIRST_PLACE,
  AMOUNT_OF_SECOND_PLACE,
  AMOUNT_OF_FOURTH_PLACE,
  AMOUNT_OF_FIFTH_PLACE,
} = require('./utils/constants');

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
    if (this.countOfSameNum === AMOUNT_OF_FIRST_PLACE) {
      return FIRST_PLACE_NUMBER;
    }
    if (this.countOfSameNum === AMOUNT_OF_SECOND_PLACE && this.hasBonusNum) {
      return SECOND_PLACE_NUMBER;
    }
    if (this.countOfSameNum === AMOUNT_OF_SECOND_PLACE && !this.hasBonusNum) {
      return THIRD_PLACE_NUMBER;
    }
    if (this.countOfSameNum === AMOUNT_OF_FOURTH_PLACE) {
      return FOURTH_PLACE_NUMBER;
    }
    if (this.countOfSameNum === AMOUNT_OF_FIFTH_PLACE) {
      return FIFTH_PLACE_NUMBER;
    }
    return null;
  }

  getWinningRank() {
    return this.winningRank;
  }
}

module.exports = WinningChecker;
