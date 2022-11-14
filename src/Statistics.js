const { SYSTEM } = require('./consts/LottoSystem');
const { NOTICE } = require('./consts/Message');
const Console = require('./Console');

class Statistics {
  calculates;
  purchase;
  rankCount;
  totalReward;
  profitRate;

  constructor(calculates, purchase) {
    this.calculates = calculates;
    this.purchase = purchase;
    this.rankCount = this.calcRankCount();
    this.totalReward = this.calcTotalReward();
    this.profitRate = this.calcProfitRate();
  }

  calcRankCount() {
    let rankCount = {};

    for (const rank in SYSTEM.RANK) {
      rankCount[rank] = 0;
    }

    for (const calculate of this.calculates) {
      const rank = calculate.getRank();

      rankCount[rank] += 1;
    }

    return rankCount;
  }

  calcTotalReward() {
    let totalReward = 0;

    for (const key in this.rankCount) {
      totalReward += SYSTEM.REWARD[key] * this.rankCount[key];
    }

    return totalReward;
  }

  calcProfitRate() {
    const profitRate =
      Math.round((this.totalReward / this.purchase) * 1000) / 10;
    return profitRate;
  }

  print() {
    const {
      STATISTICS: { TITLE, PROFIT_RATE },
    } = NOTICE;

    Console.print(TITLE);

    const countBonus = this.getCountBonus();
    for (const element of countBonus) {
      Console.print(this.getCountMessage(element));
    }

    Console.print(PROFIT_RATE(this.profitRate));
  }

  getCountBonus() {
    let countBonus = [];

    for (const key in SYSTEM.RANK) {
      countBonus.push([key, SYSTEM.RANK[key], SYSTEM.BONUS[key]]);
    }

    return countBonus.reverse().slice(1);
  }

  getCountMessage(element) {
    const [rank, count, bonus] = element;

    const {
      STATISTICS: { SAME, BONUS, MONEY, COUNT },
    } = NOTICE;

    let countMessage = SAME(count);

    if (bonus) {
      countMessage += BONUS;
    }

    countMessage += MONEY(SYSTEM.REWARD[rank]);
    countMessage += COUNT(this.rankCount[rank]);

    return countMessage;
  }
}

module.exports = Statistics;
