const Io = require("./utils/Io");
const { LOTTO_RANK, LOTTO_AMOUNT } = require("./constants/index");

const Statistic = class {
  #io;
  #lottos;
  #winNumber;
  #bonusNumber;
  constructor({ lottos, winNumber, bonusNumber }) {
    if (!lottos) throw new Error("[ERROR] 로또 번호가 필요합니다.");
    if (!winNumber) throw new Error("[ERROR] 당첨 번호가 필요합니다.");
    this.#lottos = lottos;
    this.#winNumber = winNumber;
    this.#bonusNumber = bonusNumber;
    this.#io = Io;
  }

  announceLottoResult() {
    const rank = this.getRankResult();
    const messages = this.generateMessage(rank, this.getYield(rank));
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

  calculateRank(matchCount, lotto) {
    switch (matchCount) {
      case LOTTO_RANK.CASE.RANK_ONE:
        return LOTTO_RANK.NAME.RANK_ONE;
      case LOTTO_RANK.CASE.RANK_TREE:
        return lotto.includes(this.#bonusNumber) ? LOTTO_RANK.NAME.RANK_TWO : LOTTO_RANK.NAME.RANK_TREE;
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
        return 2000000000 * count;
      case LOTTO_RANK.NAME.RANK_TWO:
        return 30000000 * count;
      case LOTTO_RANK.NAME.RANK_TREE:
        return 1500000 * count;
      case LOTTO_RANK.NAME.RANK_FOUR:
        return 50000 * count;
      case LOTTO_RANK.NAME.RANK_FIVE:
        return 5000 * count;
    }
  }

  getYield(rank) {
    const buyAmount = this.#lottos.length * LOTTO_AMOUNT.VALID_UNIT;
    const winAmounts = [];
    rank.forEach((value, key) => winAmounts.push(this.calculateYield(key, value)));
    return (((winAmounts.reduce((acc, cur) => acc + cur, 0) + buyAmount - buyAmount) / buyAmount) * 100).toFixed(1);
  }

  getRankResult() {
    const rank = new Map();
    Object.keys(LOTTO_RANK.NAME).forEach((key) => rank.set(key, 0));
    this.#lottos.forEach((lotto) => {
      const rankResult = this.calculateRank(this.getMatchingCount(lotto), lotto);
      if (rank.has(rankResult)) rank.set(rankResult, rank.get(rankResult) + 1);
    });
    return rank;
  }

  getMatchingCount(lotto) {
    return lotto.reduce((count, number) => (this.#winNumber.includes(number) ? count + 1 : count), 0);
  }
};

module.exports = Statistic;
