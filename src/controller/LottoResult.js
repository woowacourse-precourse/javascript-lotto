const {
  DEFAULT,
  RESULT_STRING,
  LOTTO_PRIZE,
  RANK,
} = require("../utils/constant.js");
const { divideThousandUnit } = require("../utils/utils.js");
const { Console } = require("@woowacourse/mission-utils");

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
      (luckyCount, number) =>
        (luckyCount += luckyNumber.includes(number) ? 1 : 0),
      DEFAULT.ZERO,
    );
  }

  getResult() {
    const result = {};
    Object.values(RANK).forEach((value) => (result[value] = 0));
    for (const lotto of this.lottos) {
      const luckyCount = this.countLuckyCount(lotto, this.luckyNumber);
      if (luckyCount <= DEFAULT.MIN_LUCKY_COUNT) continue;
      result[this.convertRank(luckyCount, this.isBonus(lotto))] += 1;
    }

    return result;
  }

  printLottoResult(lottoResult) {
    const rankAscendingOrder = Object.entries(lottoResult).reverse();
    for (const [rank, count] of rankAscendingOrder) {
      Console.print(
        `${RESULT_STRING[rank]} (${divideThousandUnit(
          LOTTO_PRIZE[rank],
        )}원) - ${count}개`,
      );
    }
  }
}

module.exports = LottoResult;
