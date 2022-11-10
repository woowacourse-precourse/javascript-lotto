class Result {
  constructor(lottoArray, userLotto, bonusNumber) {
    this.lottoArray = lottoArray;
    this.userLotto = userLotto;
    this.bonusNumber = bonusNumber;
    this.calculateEachLotto();
  }

  calculateEachLotto() {
    this.lottoArray.forEach((lotto) => {
      let score = 0;

      lotto.forEach((item) => {
        if (this.userLotto.includes(item)) {
          score += 1;
        }
      });
    });
  }
}

module.exports = Result;
