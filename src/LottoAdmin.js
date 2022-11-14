const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const { THREE, FOUR, FIVE, FIVE_AND_BONUS, SIX } = require("./constants");

class LottoAdmin {
  static generateLottoAnswer(lottoNum) {
    return Array.from({ length: lottoNum }, () =>
      Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => (a > b ? 1 : -1))
    );
  }

  static getSameNumWithInputLotto(lotto, winNumbers) {
    return lotto.filter((num) => winNumbers.includes(num)).length;
  }

  static getWinStatistics(lottos, [winNumbers, bonusNumber]) {
    const initialState = {
      [THREE]: 0,
      [FOUR]: 0,
      [FIVE]: 0,
      [FIVE_AND_BONUS]: 0,
      [SIX]: 0,
    };

    return lottos.reduce((acc, lotto) => {
      const sameCount = this.getSameNumWithInputLotto(lotto, winNumbers);
      if (sameCount === 3) return { ...acc, [THREE]: acc[THREE] + 1 };
      if (sameCount === 4) return { ...acc, [FOUR]: acc[FOUR] + 1 };
      if (sameCount === 5 && !lotto.includes(bonusNumber))
        return { ...acc, [FIVE]: acc[FIVE] + 1 };
      if (sameCount === 5)
        return { ...acc, [FIVE_AND_BONUS]: acc[FIVE_AND_BONUS] + 1 };
      if (sameCount === 6) return { ...acc, [SIX]: acc[SIX] + 1 };
      return acc;
    }, initialState);
  }

  static printWinStatistics(winStatistics) {
    Console.print(
      Object.entries(winStatistics)
        .map(([key, value]) => key + value + "개")
        .join("\n")
    );
  }
}

module.exports = LottoAdmin;
