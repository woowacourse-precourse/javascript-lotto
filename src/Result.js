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
    let score = 0;
    let matchBonus = false;

    lotto.forEach((item) => {
      if (this.userLotto.includes(item)) {
        score += 1;
      }

      if (item === this.bonusNumber) {
        matchBonus = true;
      }
    });
  }
}

module.exports = Result;
