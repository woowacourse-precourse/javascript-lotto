class Result {
  constructor(lottoArray, userLotto, bonusNumber) {
    this.lottoArray = lottoArray;
    this.userLotto = userLotto;
    this.bonusNumber = bonusNumber;

    this.fifth = 0;
    this.fourth = 0;
    this.third = 0;
    this.second = 0;
    this.first = 0;

    this.calculateEachLotto();
  }

  calculateEachLotto() {
    this.lottoArray.forEach((lotto) => {
      this.calculateOneLotto(lotto);
    });
  }

  calculateOneLotto(lotto) {
    this.score = 0;
    this.matchBonus = false;

    lotto.forEach((item) => {
      if (this.userLotto.includes(item)) {
        this.score += 1;
      }

      if (item === this.bonusNumber) {
        this.matchBonus = true;
      }
    });

    this.getRanking();
  }

  getRanking() {
    if (this.score === 3) {
      this.fifth += 1;

      return;
    }

    if (this.score === 4) {
      this.fourth += 1;

      return;
    }

    if (this.score === 5) {
      if (this.matchBonus) {
        this.second += 1;

        return;
      }

      this.third += 1;

      return;
    }

    if (this.score === 6) {
      this.first += 1;
    }
  }
}

module.exports = Result;
