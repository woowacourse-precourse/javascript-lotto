class LottoGame {
    matchedWinningNumberCount;
    matchedBonusNumber;

  constructor(lottoNumber, winningNumber, bonusNumber) {
    this.lottoNumber = lottoNumber;
    this.winningNumber = winningNumber;
    this.bonusNumber = bonusNumber;
  }

  matchWinningNumber() {
    const winningNumberSet = new Set(this.winningNumber);
    let count = 0;

    for (let i = 0; i < this.lottoNumber.length; i++) {
      if (winningNumberSet.has(this.lottoNumber[i])) {
        count += 1;
      }
    }
      this.matchedWinningNumberCount = count;
  }

  matchBonusNumber() {
    this.matchedBonusNumber = this.lottoNumber.includes(this.bonusNumber);
  }
}

module.exports = LottoGame;
