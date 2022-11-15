const { RESULT_CONST } = require('./RankConstants');

class Rank {
  constructor(compareLotto, userLotto, bonus) {
    this.compareLotto = compareLotto;
    this.userLotto = userLotto;
    this.bonusNumber = Number(bonus);
    this.rank = [0, 0, 0, 0, 0];
    this.earningsRate = null;
  }

  calculateEachLotto() {
    this.compareLotto.forEach(lotto => {
      this.calculateOneLotto(lotto);
    });

    this.getEarningsRate();
  }

  calculateOneLotto(lotto) {
    this.score = 0;
    this.matchBonus = false;

    lotto.forEach(item => {
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

  getPrize() {
    let finalPrize = 0;

    this.rank.forEach((item, index) => {
      finalPrize += item * RESULT_CONST.EACH_PRIZE[index];
    });

    return finalPrize;
  }

  getEarningsRate() {
    const prize = this.getPrize();
    const purchaseAmount = this.compareLotto.length * 1000;

    this.earningsRate = ((prize / purchaseAmount) * 100).toFixed(1);

    this.checkEarningsRateOverThousand();
  }

  checkEarningsRateOverThousand() {
    if (Number(this.earningsRate) >= 1000) {
      this.getEarningsRateMarkedByComma();
    }
  }

  getEarningsRateMarkedByComma() {
    const splitedEarningsRate = this.earningsRate.split('.');

    splitedEarningsRate[0] = Number(splitedEarningsRate[0]).toLocaleString();

    this.earningsRate = splitedEarningsRate.join('.');
  }
}

module.exports = Rank;
