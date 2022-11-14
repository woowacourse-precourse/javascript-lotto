const Utils = require("../Utils");

class LottoSystem {
  get minNumber() {
    return 1;
  }

  get maxNumber() {
    return 45;
  }

  get lottoLength() {
    return 6;
  }

  get moneyUnit() {
    return 1000;
  }

  getRewardByRank(rank) {
    const REWARD_MAP = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
    return REWARD_MAP[rank] || null;
  }

  matchCount(lottoA, lottoB) {
    const matchedNumbersSet = Utils.intersect(new Set(lottoA), new Set(lottoB));
    return [...matchedNumbersSet].length;
  }

  getRank(matchedCount, isMatchedBonus = false) {
    const RANK_MAP = {
      6: () => 1,
      5: (isMatchedBonus) => (isMatchedBonus ? 2 : 3),
      4: () => 4,
      3: () => 5,
    };
    return RANK_MAP[matchedCount]
      ? RANK_MAP[matchedCount](isMatchedBonus)
      : null;
  }
}

module.exports = LottoSystem;
