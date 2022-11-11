const Console = require("@woowacourse/mission-utils").Console;

class Result {
  constructor(lottoArray, userLotto, bonusNumber) {
    this.lottoArray = lottoArray;
    this.userLotto = userLotto;
    this.bonusNumber = bonusNumber;

    this.rank = [0, 0, 0, 0, 0];

    this.calculateEachLotto();
  }

  calculateEachLotto() {
    this.lottoArray.forEach((lotto) => {
      this.calculateOneLotto(lotto);
    });

    this.showResult();
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
    this.getFifthRank();

    this.getFourthRank();

    this.getThirdRankOrSecondRank();

    this.getFirstRank();
  }

  getFifthRank() {
    if (this.score === 3) {
      this.rank[4] += 1;
    }
  }

  getFourthRank() {
    if (this.score === 4) {
      this.rank[3] += 1;
    }
  }

  getThirdRankOrSecondRank() {
    if (this.score === 5) {
      if (this.matchBonus) {
        this.rank[1] += 1;

        return;
      }

      this.rank[2] += 1;
    }
  }

  getFirstRank() {
    if (this.score === 6) {
      this.rank[0] += 1;
    }
  }

  showResult() {
    Console.print("\n당첨 통계\n---");
    Console.print(`3개 일치 (5,000원) - ${this.rank[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.rank[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.rank[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.rank[1]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.rank[0]}개`);
  }
}

module.exports = Result;
