const { DEFAULT, ERROR, RANK } = require("../utils/constant.js");

class LottoResult {
  constructor(lottos, luckyNumber, bonusNumber) {
    this.lottos = lottos;
    this.luckyNumber = luckyNumber;
    this.bonusNumber = bonusNumber;
  }

  isBonus(lotto) {
    return lotto.includes(this.bonusNumber);
  }

  convertRank(luckyCount, isBonus) {
    switch (luckyCount) {
      case 6:
        return "FIRST";
      case 5:
        if (isBonus) {
          return "SECOND";
        }
        return "THIRD";
      case 4:
        return "FOURTH";
      case 3:
        return "FIFTH";
      default:
        return;
    }
  }

  countLuckyCount(lotto, luckyNumber) {
    return lotto.reduce(
      (luckyCount, number, index) =>
        (luckyCount += number === luckyNumber[index] ? 1 : 0),
      DEFAULT.ZERO,
    );
  }

  getRank() {
    const rank = {};
    Object.values(RANK).forEach((value) => (rank[value] = 0));
    for (const lotto of this.lottos) {
      const luckyCount = this.countLuckyCount(lotto, this.luckyNumber);
      if (luckyCount <= DEFAULT.MIN_LUCKY_COUNT) continue;
      rank[this.convertRank(luckyCount, this.isBonus(lotto))] += 1;
    }

    return rank;
  }
}

module.exports = LottoResult;
