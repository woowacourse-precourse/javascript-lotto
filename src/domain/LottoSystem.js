const Utils = require("../Utils");

class LottoSystem {
  get LOTTO_MIN_NUMBER() {
    return 1;
  }

  get LOTTO_MAX_NUMBER() {
    return 45;
  }

  get LOTTO_LENGTH() {
    return 6;
  }

  get LOTTO_PRICE() {
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
