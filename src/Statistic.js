const Io = require("./utils/Io");
const { LOTTO_RANK, LOTTO_AMOUNT, LOTTO_RANK_HASH } = require("./constants/index");

const Statistic = class {
  #io;
  constructor() {
    this.#io = Io;
  }

  outputView({ lottos, winNumber, bonusNumber }) {
    const messages = this.generateMessage({
      rank: this.getRankResult({ lottos, winNumber, bonusNumber }),
      totalYield: this.getYield({ rank, lottos }),
    });
    this.#io.print("\n당첨 통계");
    this.#io.print("---");
    messages.forEach((message) => this.#io.print(message));
  }

  getRankResult({ lottos, winNumber, bonusNumber }) {
    const rank = new Map();
    Object.keys(LOTTO_RANK.NAME).forEach((key) => rank.set(key, 0));
    lottos.forEach((lotto) => {
      const matchCount = this.getMatchingCount({ lotto, winNumber });
      const isRankTwo = this.hasIncludesBonusNumber({ lotto, bonusNumber }) && matchCount === LOTTO_RANK.CASE.RANK_TWO;
      const rankResult = isRankTwo ? LOTTO_RANK.NAME.RANK_TWO : this.calculateRank(matchCount);
      if (rank.has(rankResult)) rank.set(rankResult, rank.get(rankResult) + 1);
    });
    return rank;
  }

  getYield({ rank, lottos }) {
    const buyAmount = lottos.length * LOTTO_AMOUNT.VALID_UNIT;
    const winAmounts = [];
    rank.forEach((count, rank) => winAmounts.push(this.calculateYield(rank) * count));
    return ((winAmounts.reduce((acc, cur) => acc + cur, 0) / buyAmount) * 100).toFixed(1);
  }

  getRankTwoMatchingCount({ lottos, winNumber }) {
    return lottos.filter((lotto) => this.getMatchingCount({ lotto, winNumber }) === LOTTO_RANK.CASE.RANK_TWO).length;
  }

  getMatchingCount({ lotto, winNumber }) {
    return lotto.reduce((count, number) => (winNumber.includes(number) ? count + 1 : count), 0);
  }

  generateMessage({ rank, totalYield }) {
    return Object.entries(LOTTO_RANK.MESSAGE)
      .reverse()
      .map(([key, value]) => `${value}${rank.get(key)}개`)
      .concat(`총 수익률은 ${totalYield}%입니다.`);
  }

  calculateRank(matchCount) {
    return LOTTO_RANK_HASH.CASE[matchCount];
  }

  calculateYield(rank) {
    return LOTTO_RANK_HASH.AMOUNT[rank];
  }

  hasIncludesBonusNumber({ lotto, bonusNumber }) {
    return lotto.includes(bonusNumber);
  }
};

module.exports = Statistic;
