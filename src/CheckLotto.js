const { RULES, PRIZE } = require("./constants");

class CheckLotto {
  #lotto;
  #winningNumber;
  #bonusNumber;
  #rankCount;
  #profitRate;

  constructor() {
    this.#lotto = [];
    this.#winningNumber = [];
    this.#bonusNumber = 0;
    this.#rankCount = new Array(RULES.RANK_COUNT).fill(0);
  }

  matchResult(lottoSet, winningNumber, bonusNumber) {
    this.#winningNumber = winningNumber;
    this.#bonusNumber = bonusNumber;

    lottoSet.map((lotto) => {
      this.#lotto = lotto;
      this.matchScoreRank(this.#winningNumber.filter((num) => lotto.includes(num)).length);
    });
  }

  matchScoreRank(count) {
    switch (count) {
      case 3:
        this.#rankCount[4] += 1;
        break;
      case 4:
        this.#rankCount[3] += 1;
        break;
      case 5:
        this.bonusNumberMatch(this.#bonusNumber);
        break;
      case 6:
        this.#rankCount[0] += 1;
        break;
    }
  }

  bonusNumberMatch(bonusNumber) {
    if (this.#lotto.includes(parseInt(bonusNumber))) {
      return (this.#rankCount[1] += 1);
    }

    if (!this.#lotto.includes(parseInt(bonusNumber))) {
      return (this.#rankCount[2] += 1);
    }
  }

  profitResult(rankCount, money) {
    const eachRankPrize = rankCount.map((value, idx) => {
      return value * PRIZE.MONEY[idx];
    });
    const sumPrize = eachRankPrize.reduce((a, b) => a + b);

    return ((sumPrize * 100) / money).toFixed(1);
  }

  play(money, lottoSet, winningNumber, bonusNumber) {
    this.matchResult(lottoSet, winningNumber, bonusNumber);
    this.#profitRate = this.profitResult(this.#rankCount, money);

    return { matchResult: this.#rankCount, profitResult: this.#profitRate };
  }
}
module.exports = CheckLotto;
