const Console = require("@woowacourse/mission-utils").Console;

const NOTIFY_WINNING_STATE = "\n당첨 통계\n---";

class Result {
  constructor(amount, bundleOfLotto, userLotto, bonusNumber) {
    this.amount = Number(amount);
    this.bundleOfLotto = bundleOfLotto;
    this.userLotto = userLotto;
    this.bonusNumber = bonusNumber;

    this.rank = [0, 0, 0, 0, 0];

    this.calculateEachLotto();
  }

  calculateEachLotto() {
    this.bundleOfLotto.forEach((lotto) => {
      this.calculateOneLotto(lotto);
    });

    this.showResult();

    this.getPrize();

    this.showEarningsRate();
  }

  calculateOneLotto(lotto) {
    this.score = 0;
    this.matchBonus = false;

    lotto.forEach((item) => {
      this.calculateScore(item);

      this.checkBonusNumber(item);
    });

    this.getRanking();
  }

  calculateScore(item) {
    if (this.userLotto.includes(item)) {
      this.score += 1;
    }
  }

  checkBonusNumber(item) {
    if (item === this.bonusNumber) {
      this.matchBonus = true;
    }
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
    Console.print(NOTIFY_WINNING_STATE);
    Console.print(`3개 일치 (5,000원) - ${this.rank[4]}개`);
    Console.print(`4개 일치 (50,000원) - ${this.rank[3]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${this.rank[2]}개`);
    Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${this.rank[1]}개`
    );
    Console.print(`6개 일치 (2,000,000,000원) - ${this.rank[0]}개`);
  }

  getPrize() {
    const eachPrize = [2000000000, 30000000, 1500000, 50000, 5000];

    let finalPrize = 0;

    this.rank.forEach((item, index) => {
      finalPrize += item * eachPrize[index];
    });

    return finalPrize;
  }

  showEarningsRate() {
    const earningsRate = this.getEarningsRate();

    Console.print(`총 수익률은 ${earningsRate}%입니다.`);
    Console.close();
  }

  getEarningsRate() {
    const prize = this.getPrize();

    const earningsRate = ((prize / this.amount) * 100).toFixed(1);

    return earningsRate;
  }
}

module.exports = Result;
