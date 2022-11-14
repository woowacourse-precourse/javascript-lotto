const Io = require("./utils/Io");
const { LOTTO_RANK, LOTTO_AMOUNT } = require("./constants/index");

const Statistic = class {
  #io;
  constructor() {
    this.#io = Io;
  }

  outputView({ lottos, winNumber, bonusNumber }) {
    const rank = this.getRankResult({ lottos, winNumber, bonusNumber });
    const messages = this.generateMessage(rank, this.getYield({ rank, lottos }));
    this.#io.print("\n당첨 통계");
    this.#io.print("---");
    messages.forEach((message) => this.#io.print(message));
  }

  generateMessage(rank, totalYield) {
    return Object.entries(LOTTO_RANK.MESSAGE)
      .reverse()
      .map(([key, value]) => `${value}${rank.get(key)}개`)
      .concat(`총 수익률은 ${totalYield}%입니다.`);
  }

  calculateRank({ matchCount, lotto, bonusNumber }) {
    switch (matchCount) {
      case LOTTO_RANK.CASE.RANK_ONE:
        return LOTTO_RANK.NAME.RANK_ONE;
      case LOTTO_RANK.CASE.RANK_TREE:
        return lotto.includes(bonusNumber) ? LOTTO_RANK.NAME.RANK_TWO : LOTTO_RANK.NAME.RANK_TREE;
      case LOTTO_RANK.CASE.RANK_FOUR:
        return LOTTO_RANK.NAME.RANK_FOUR;
      case LOTTO_RANK.CASE.RANK_FIVE:
        return LOTTO_RANK.NAME.RANK_FIVE;
      default:
        return;
    }
  }

  calculateYield(rank, count) {
    switch (rank) {
      case LOTTO_RANK.NAME.RANK_ONE:
        return LOTTO_RANK.AMOUNT.RANK_ONE * count;
      case LOTTO_RANK.NAME.RANK_TWO:
        return LOTTO_RANK.AMOUNT.RANK_TWO * count;
      case LOTTO_RANK.NAME.RANK_TREE:
        return LOTTO_RANK.AMOUNT.RANK_TREE * count;
      case LOTTO_RANK.NAME.RANK_FOUR:
        return LOTTO_RANK.AMOUNT.RANK_FOUR * count;
      case LOTTO_RANK.NAME.RANK_FIVE:
        return LOTTO_RANK.AMOUNT.RANK_FIVE * count;
    }
  }

  getYield({ rank, lottos }) {
    const buyAmount = lottos.length * LOTTO_AMOUNT.VALID_UNIT;
    const winAmounts = [];
    rank.forEach((value, key) => winAmounts.push(this.calculateYield(key, value)));
    return ((winAmounts.reduce((acc, cur) => acc + cur, 0) / buyAmount) * 100).toFixed(1);
  }

  getRankResult({ lottos, winNumber, bonusNumber }) {
    const rank = new Map();
    Object.keys(LOTTO_RANK.NAME).forEach((key) => rank.set(key, 0));
    lottos.forEach((lotto) => {
      const matchCount = this.getMatchingCount({ lotto, winNumber });
      const rankResult = this.calculateRank({ matchCount, lotto, bonusNumber });
      if (rank.has(rankResult)) rank.set(rankResult, rank.get(rankResult) + 1);
    });
    return rank;
  }

  getMatchingCount({ lotto, winNumber }) {
    return lotto.reduce((count, number) => (winNumber.includes(number) ? count + 1 : count), 0);
  }
};

module.exports = Statistic;
