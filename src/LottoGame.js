class LottoGame {
  #matchedWinningNumberCount;
  #matchedBonusNumber;

  constructor(lottoNumber, winningNumber, bonusNumber) {
    this.#matchedWinningNumberCount = this.matchWinningNumber(lottoNumber, winningNumber);
    this.#matchedBonusNumber = this.matchBonusNumber(lottoNumber, bonusNumber);
  }

  get matchedWinningNumberCount() {
    return this.#matchedWinningNumberCount;
  }

  get matchedBonusNumber() {
    return this.#matchedBonusNumber;
  }

  matchWinningNumber(lottoNumber, winningNumber) {
    const winningNumberSet = new Set(winningNumber);
    let count = 0;

    for (let i = 0; i < lottoNumber.length; i++) {
      if (winningNumberSet.has(lottoNumber[i])) {
        count += 1;
      }
    }
    return count;
  }

  matchBonusNumber(lottoNumber, bonusNumber) {
    return lottoNumber.includes(bonusNumber);
  }
}

module.exports = LottoGame;
