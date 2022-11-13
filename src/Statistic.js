const Io = require("./utils/Io");
const { LOTTO_RANK } = require("./constants/index");

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
