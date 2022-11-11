const MissionUtils = require('@woowacourse/mission-utils');

class Result {
  score = {
    three: 0,
    four: 0,
    five: 0,
    fiveAndBonus: 0,
    six: 0,
  };

  constructor(LottosArray, winLotto, bonusNumber, money) {
    this.winLotto = winLotto;
    this.bonusNumber = bonusNumber;
    this.money = money;

    LottosArray.forEach((lotto) => {
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
      if (this.winLotto.lottoNumbers.includes(num)) count++;
    });
    return count;
  }

  getIsBonus(Lotto) {
    if (Lotto.lottoNumbers.includes(this.bonusNumber)) {
      return true;
    }
  }

}

module.exports = Result;
