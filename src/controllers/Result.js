const { WINNINGS } = require('../utils/Constants');
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

  constructor(lottoArray, winningNumbers, bonusNumber, money) {
    this.lottoArray = lottoArray;
    this.winningNumbers = winningNumbers;
    this.bonusNumber = bonusNumber;
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
      const game = new LottoGame(lottoNumber, this.winningNumbers, this.bonusNumber);

      if (game.matchedWinningNumberCount === 3) this.#score.three += 1;
      if (game.matchedWinningNumberCount === 4) this.#score.four += 1;
      if (game.matchedWinningNumberCount === 5 && !game.matchedBonusNumber) this.#score.five += 1;
      if (game.matchedWinningNumberCount === 5 && game.matchedBonusNumber) this.#score.fivePlusBonus += 1;
      if (game.matchedWinningNumberCount === 6) this.#score.six += 1;
    });
  }

  getRevenue() {
    const total =
      this.#score.three * WINNINGS.matchedThree
      + this.#score.four * WINNINGS.matchedFour
      + this.#score.five * WINNINGS.matchedFive
      + this.#score.fivePlusBonus * WINNINGS.matchedFiveAndBonus
      + this.#score.six * WINNINGS.matchedSix;

    this.#revenue = Number((total / this.money) * 100).toFixed(1);
  }
}

module.exports = Result;
