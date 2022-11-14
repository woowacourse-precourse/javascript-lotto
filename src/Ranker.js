const LottoAdmin = require("./LottoAdmin");

class Ranker {
  static #generateRankCondition(sameCount, [lotto, bonusNumber]) {
    return [3, 4, 5, 5, 6].map((num, idx) => {
      if (idx === 2) return sameCount === num && !lotto.includes(bonusNumber);
      return sameCount === num;
    });
  }

  static getPriceRank(lottos, [winNumbers, bonus]) {
    const initialState = [0, 0, 0, 0, 0];
    return lottos.reduce((acc, lotto) => {
      const sameCount = LottoAdmin.getSameNumWithInputLotto(lotto, winNumbers);
      const conditions = this.#generateRankCondition(sameCount, [lotto, bonus]);
      conditions.forEach((condition, idx) => {
        if (condition) acc[idx] += 1;
      });
      return acc;
    }, initialState);
  }
}

module.exports = Ranker;
