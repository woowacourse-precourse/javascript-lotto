const {
  FIRST_PLACE,
  SECOND_PLACE,
  THIRD_PLACE,
  FOURTH_PLACE,
  FIFTH_PLACE,
} = require('../utils/constants');

class WinningRank {
  #winningRank;

  constructor(lottoNumbers, winningNumbers, bonusNumber) {
    this.lottoNumbers = lottoNumbers;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.countOfSameNum = this.countSameNum();
    this.hasBonusNum = this.hasBonusNum();
    this.#winningRank = this.setWinningRank();
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

  setWinningRank() {
    if (this.countOfSameNum === FIRST_PLACE.LOTTO_COUNT) {
      return FIRST_PLACE.NUMBER;
    }
    if (this.countOfSameNum === SECOND_PLACE.LOTTO_COUNT) {
      if (this.hasBonusNum) return SECOND_PLACE.NUMBER;
      return THIRD_PLACE.NUMBER;
    }
    if (this.countOfSameNum === FOURTH_PLACE.LOTTO_COUNT) {
      return FOURTH_PLACE.NUMBER;
    }
    if (this.countOfSameNum === FIFTH_PLACE.LOTTO_COUNT) {
      return FIFTH_PLACE.NUMBER;
    }
    return null;
  }

  getWinningRank() {
    return this.#winningRank;
  }
}

module.exports = WinningRank;
