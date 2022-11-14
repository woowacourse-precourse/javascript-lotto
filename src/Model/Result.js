const WIN_MONEY = {
  THREE: 5000,
  FOUR: 50000,
  FIVE: 1500000,
  FIVE_AND_BONUS: 30000000,
  SIX: 200000000,
};
class Result {
  #score = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };
  #game;

  get score() {
    return this.#score;
  }

  constructor(LottoGame) {
    this.#game = LottoGame;
    this.#game.lottos.forEach((lotto) => {
      const currentScore = this.getScore(lotto);
      if (currentScore === 3) this.#score.three++;
      if (currentScore === 4) this.#score.four++;
      if (currentScore === 5) {
        if (this.getIsBonus(lotto)) this.#score.fiveAndBonus++;
        if (!this.getIsBonus(lotto)) this.#score.five++;
      }
      if (currentScore === 6) this.#score.six++;
    });
  }

  getScore(Lotto) {
    let count = 0;
    Lotto.lottoNumbers.forEach((num) => {
      if (this.#game.winLotto.lottoNumbers.includes(num)) count++;
    });
    return count;
  }

  getIsBonus(Lotto) {
    if (Lotto.lottoNumbers.includes(this.#game.bonusNumber)) {
      return true;
    }
  }

  getYield() {
    return parseFloat(
      (
        ((this.#score.three * WIN_MONEY.THREE +
          this.#score.four * WIN_MONEY.FOUR +
          this.#score.five * WIN_MONEY.FIVE +
          this.#score.fiveAndBonus * WIN_MONEY.FIVE_AND_BONUS +
          this.#score.six * WIN_MONEY.SIX) /
          this.#game.money) *
        100
      ).toFixed(2)
    );
  }
}

module.exports = Result;
