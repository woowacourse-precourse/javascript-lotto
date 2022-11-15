const { STATIC_RANK, STATIC_TEMPLATE } = require("../constants/gameCondition");

class LottoRank {
  #rank;
  #rankTemplate;

  constructor() {
    this.#rank = STATIC_RANK;
    this.#rankTemplate = STATIC_TEMPLATE;
  }

  getRank(matchCount, hasBonusNumber) {
    const rank = Object.entries(this.#rankTemplate)
      .filter(([key, value]) => value.matchCount === matchCount)
      .filter(([key, value]) => value.hasBonus === hasBonusNumber);

    if (rank.length == 0) return this.#rank.FAIL;
    return Number(rank[0][0]);
  }
}

module.exports = LottoRank;
