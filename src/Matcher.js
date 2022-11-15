const { MATCH_NUM } = require('./constant');

class Match {
  constructor() {
    this.money = 0;
    this.lottoNumbers = [];
    this.winningNumber = [];
    this.bonusNumber = 0;
    this.lottoWinnerNumber = [0, 0, 0, 0, 0];
  }

  matchLottoNumber() {
    for (let i = 0; i < this.lottoNumbers.length; i++) {
      let match = 0;
      if (this.lottoNumbers[i].includes(this.winningNumber[0])) match += 1;
      if (this.lottoNumbers[i].includes(this.winningNumber[1])) match += 1;
      if (this.lottoNumbers[i].includes(this.winningNumber[2])) match += 1;
      if (this.lottoNumbers[i].includes(this.winningNumber[3])) match += 1;
      if (this.lottoNumbers[i].includes(this.winningNumber[4])) match += 1;
      if (this.lottoNumbers[i].includes(this.winningNumber[5])) match += 1;

      if (match > 2 && match !== 5) this.setPrize(match);
      if (match === 5) this.matchBonusNumber(this.lottoNumbers[i]);
    }
  }

  matchBonusNumber(fiveMatchLotto) {
    if (fiveMatchLotto.includes(this.bonusNumber)) {
      return this.setPrize(MATCH_NUM.IS_FIVE_BONUS);
    }
    return this.setPrize(MATCH_NUM.IS_FIVE);
  }

  setPrize(match) {
    if (match === MATCH_NUM.IS_SIX) this.lottoWinnerNumber[0] += 1;
    if (match === MATCH_NUM.IS_FIVE_BONUS) this.lottoWinnerNumber[1] += 1;
    if (match === MATCH_NUM.IS_FIVE) this.lottoWinnerNumber[2] += 1;
    if (match === MATCH_NUM.IS_FOUR) this.lottoWinnerNumber[3] += 1;
    if (match === MATCH_NUM.IS_THREE) this.lottoWinnerNumber[4] += 1;
    return this.lottoWinnerNumber;
  }
}

const MATCH = new Match();

module.exports = MATCH;
