const LottoGame = require('./LottoGame');

class Result {
  result = {
    three: 0,
    four: 0,
    five: 0,
    fivePlusBonus: 0,
    six: 0,
  };

  constructor(lottoArray, winningNumbers, bonusNumbers) {
    this.lottoArray = lottoArray;
    this.winningNumbers = winningNumbers;
      this.bonusNumbers = bonusNumbers;
      this.getResult();
  }

  getResult() {
    this.lottoArray.forEach((item) => {
      const lottoNumber = item.lottoNumber;
        const game = new LottoGame(lottoNumber, this.winningNumbers, this.bonusNumbers);
        
        if (game.matchedWinningNumberCount === 3) this.result.three += 1;
        if (game.matchedWinningNumberCount === 4) this.result.four += 1;
        if (game.matchedWinningNumberCount === 5 && !game.matchedBonusNumber) this.result.five += 1;
        if (game.matchedWinningNumberCount === 5 && game.matchedBonusNumber) this.result.fivePlusBonus += 1;
        if (game.matchedWinningNumberCount === 6) this.result.six += 1;
    });
  }
}

module.exports = Result;
