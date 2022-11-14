const LottoGame = require('./LottoGame');

class Result {
  #score = {
    three: 0,
    four: 0,
    five: 0,
    fivePlusBonus: 0,
    six: 0,
  };
  #revenue;

  constructor(lottoArray, winningNumbers, bonusNumbers, money) {
    this.lottoArray = lottoArray;
    this.winningNumbers = winningNumbers;
    this.bonusNumbers = bonusNumbers;
    this.money = money;
    this.getScore();
    this.getRevenue();
  }
    
    get score() {
        return this.#score;
    }

    get revenue() {
        return this.#revenue;
    }

  getScore() {
    this.lottoArray.forEach((item) => {
      const lottoNumber = item.lottoNumber;
      const game = new LottoGame(lottoNumber, this.winningNumbers, this.bonusNumbers);

      if (game.matchedWinningNumberCount === 3) this.#score.three += 1;
      if (game.matchedWinningNumberCount === 4) this.#score.four += 1;
      if (game.matchedWinningNumberCount === 5 && !game.matchedBonusNumber) this.#score.five += 1;
      if (game.matchedWinningNumberCount === 5 && game.matchedBonusNumber) this.#score.fivePlusBonus += 1;
      if (game.matchedWinningNumberCount === 6) this.#score.six += 1;
    });
  }

  getRevenue() {
    const total =
      this.#score.three * 5000
      + this.#score.four * 50000
      + this.#score.five * 1500000
      + this.#score.fivePlusBonus * 30000000
      + this.#score.six * 2000000000;

    this.#revenue = Number((total / this.money) * 100).toFixed(1);
  }
}

module.exports = Result;
