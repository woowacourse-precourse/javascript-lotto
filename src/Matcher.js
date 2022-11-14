class Match {
  constructor() {
    this.money = 0;
    this.lottoNumbers = [];
    this.winningNumber = [];
    this.bonusNumber = [];
    this.lottoWinnerNumber = [0, 0, 0, 0, 0];
  }

  matchLottoNumber() {
    for (let i = 0; i < this.lottoNumbers.length; i++) {
      let match = 0;
      if (this.lottoNumbers[i].includes(this.winningNumber[0])) match++;
      if (this.lottoNumbers[i].includes(this.winningNumber[1])) match++;
      if (this.lottoNumbers[i].includes(this.winningNumber[2])) match++;
      if (this.lottoNumbers[i].includes(this.winningNumber[3])) match++;
      if (this.lottoNumbers[i].includes(this.winningNumber[4])) match++;
      if (this.lottoNumbers[i].includes(this.winningNumber[5])) match++;

      if (match > 2 && match !== 5) this.setPrize(match);
      if (match === 5) this.matchBonusNumber(this.lottoNumbers[i]);
    }
  }

  matchBonusNumber(fiveMatchLotto) {
    if (fiveMatchLotto.includes(this.bonusNumber[0])) {
      return this.setPrize(7);
    }
    return this.setPrize(5);
  }

  setPrize(match) {
    if (match === 6) this.lottoWinnerNumber[0] += 1;
    if (match === 7) this.lottoWinnerNumber[1] += 1;
    if (match === 5) this.lottoWinnerNumber[2] += 1;
    if (match === 4) this.lottoWinnerNumber[3] += 1;
    if (match === 3) this.lottoWinnerNumber[4] += 1;
    return this.lottoWinnerNumber;
  }
}

const MATCH = new Match();

module.exports = MATCH;
