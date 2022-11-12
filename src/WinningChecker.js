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
    if (this.countOfSameNum === 6) {
      return 1;
    }
    if (this.countOfSameNum === 5 && this.hasBonusNum) {
      return 2;
    }
    if (this.countOfSameNum === 5 && !this.hasBonusNum) {
      return 3;
    }
    if (this.countOfSameNum === 4) {
      return 4;
    }
    if (this.countOfSameNum === 3) {
      return 5;
    }
    return null;
  }
}

module.exports = WinningChecker;
