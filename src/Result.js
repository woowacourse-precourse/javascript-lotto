class Result {
  constructor(lottoArray, userLotto, bonusNumber) {
    this.lottoArray = lottoArray;
    this.userLotto = userLotto;
    this.bonusNumber = bonusNumber;
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
  }
}

module.exports = Result;
