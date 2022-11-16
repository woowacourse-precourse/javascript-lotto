const LottoAdmin = require("./LottoAdmin");

class Ranker {
  static #generateRankCondition(sameCount, [lotto, bonusNumber]) {
    return [3, 4, 5, 5, 6].map((num, idx) => {
      if (idx === 2) return sameCount === num && !lotto.includes(bonusNumber);
      if (idx === 3) return sameCount === num && lotto.includes(bonusNumber);
      return sameCount === num;
    });
  }

  static #calculatePriceRank(conditions, acc) {
    conditions.forEach((condition, idx) => {
      if (condition) acc[idx] += 1;
    });
  }

  static getPriceRank(lottos, [wins, bonus]) {
    const initialState = [0, 0, 0, 0, 0];
    return lottos.reduce((acc, lotto) => {
      const count = LottoAdmin.getSameNumWithInputLotto(lotto, wins);
      const conditions = this.#generateRankCondition(count, [lotto, bonus]);
      this.#calculatePriceRank(conditions, acc);
      return acc;
    }, initialState);
  }
}

module.exports = Ranker;
