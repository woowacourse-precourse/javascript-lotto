class WinningChecker {
  constructor(lottoNumbers, winningNumbers, bonusNumber) {
    this.lottoNumbers = lottoNumbers;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
    this.countOfSameNum = this.countSameNum();
  }

  countSameNum() {
    let sum = 0;
    this.lottoNumbers.forEach((number) => {
      if (this.winningNumbers.includes(number)) sum += 1;
    });
    return sum;
  }
}

module.exports = WinningChecker;
