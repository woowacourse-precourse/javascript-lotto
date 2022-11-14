const Console = require("@woowacourse/mission-utils").Console;
const ResultConst = require("./constant/ResultConst");

class Result {
  constructor(bundleOfLotto, userLotto, bonus) {
    this.bundleOfLotto = bundleOfLotto;
    this.userLotto = userLotto;
    this.bonusNumber = Number(bonus);
    this.rank = [0, 0, 0, 0, 0];
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

    this.getThirdRank();

    this.getSecondRank();

    this.getFirstRank();
  }

  getFifthRank() {
    if (this.score === 3) {
      this.rank[0] += 1;
    }
  }

  getFourthRank() {
    if (this.score === 4) {
      this.rank[1] += 1;
    }
  }

  getThirdRank() {
    if (this.score === 5 && !this.matchBonus) {
      this.rank[2] += 1;
    }
  }

  getSecondRank() {
    if (this.score === 5 && this.matchBonus) {
      this.rank[3] += 1;
    }
  }

  getFirstRank() {
    if (this.score === 6) {
      this.rank[4] += 1;
    }
  }

  showResult() {
    Console.print(ResultConst.NOTIFY_WINNING_STATE);

    this.rank.forEach((item, index) => {
      Console.print(
        `${ResultConst.CONDITION_OF_EACH_RANK[index]}` + `${item}개`
      );
    });
  }

  getPrize() {
    let finalPrize = 0;

    this.rank.forEach((item, index) => {
      finalPrize += item * ResultConst.EACH_PRIZE[index];
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
    const purchaseAmount = this.bundleOfLotto.length * 1000;

    this.earningsRate = ((prize / purchaseAmount) * 100).toFixed(1);

    this.checkEarningsRateOverThousand();

    return this.earningsRate;
  }

  checkEarningsRateOverThousand() {
    if (Number(this.earningsRate) >= 1000) {
      this.getEarningsRateMarkedByComma();
    }
  }

  getEarningsRateMarkedByComma() {
    const splitedEarningsRate = this.earningsRate.split(".");

    splitedEarningsRate[0] = Number(splitedEarningsRate[0]).toLocaleString();

    this.earningsRate = splitedEarningsRate.join(".");
  }
}

module.exports = Result;
