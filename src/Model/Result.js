class Result {
  score = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };
  game;

  constructor(LottoGame) {
    this.game = LottoGame;
    this.game.lottos.forEach((lotto) => {
      const currentScore = this.getScore(lotto);
      if (currentScore == 3) this.score.three++;
      if (currentScore == 4) this.score.four++;
      if (currentScore == 5) {
        if (this.getIsBonus(lotto)) this.score.fiveAndBonus++;
        if (!this.getIsBonus(lotto)) this.score.five++;
      }
      if (currentScore == 6) this.score.six++;
    });
  }

  getScore(Lotto) {
    let count = 0;
    Lotto.lottoNumbers.forEach((num) => {
      if (this.game.winLotto.lottoNumbers.includes(num)) count++;
    });
    return count;
  }

  getIsBonus(Lotto) {
    if (Lotto.lottoNumbers.includes(this.game.bonusNumber)) {
      return true;
    }
  }

  getYeild() {
    return parseFloat(
      (
        ((this.score.three * 5000 +
          this.score.four * 50000 +
          this.score.five * 1500000 +
          this.score.fiveAndBonus * 30000000 +
          this.score.six * 200000000) /
          this.game.money) *
        100
      ).toFixed(2)
    );
  }
}

module.exports = Result;
