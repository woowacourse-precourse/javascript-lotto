const Lotto = require("../Lotto");
const Utils = require("../Utils");

const MATCH_COUNT = Object({
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
});

const RANK = Object({
  ONE: 1,
  TWO: 2,
  THREE: 3,
  FOUR: 4,
  FIVE: 5,
  UN_RANK: -1,
});

class LottoStatistics {
  constructor(winningLotto) {
    if (!winningLotto instanceof Lotto) {
      throw new ReferenceError("param's instance must be Lotto.");
    }
    if (!winningLotto.bonusNumber) {
      throw new ReferenceError("Lotto must have bonus number.");
    }

    this.winningNumbers = winningLotto.numbers;
    this.bonusNumber = winningLotto.bonusNumber;

    this.RANK_MAP = {
      [MATCH_COUNT.SIX]: RANK.ONE,
      [MATCH_COUNT.FOUR]: RANK.FOUR,
      [MATCH_COUNT.THREE]: RANK.FIVE,
    };

    this.judgeRank = this.judgeRankBuilder(this.RANK_MAP);
  }

  judgeRankBuilder = (map) => (numbers) => {
    const matchedCount = this.match(numbers);
    if (this.isNeedJudgement(matchedCount)) {
      return this.judgeSecondRank(numbers);
    }
    return map[matchedCount] || RANK.UN_RANK;
  };

  match(numbers) {
    const numbersSet = new Set(numbers);
    const winningNumbersSet = new Set(this.winningNumbers);
    const matchedNumbersSet = Utils.intersect(numbersSet, winningNumbersSet);
    return [...matchedNumbersSet].length;
  }

  judgeSecondRank(numbers) {
    const isMatchBonusNumber = numbers.includes(this.bonusNumber);
    return isMatchBonusNumber ? RANK.TWO : RANK.THREE;
  }

  isNeedJudgement(matchedCount) {
    return matchedCount === MATCH_COUNT.FIVE;
  }
}

module.exports = LottoStatistics;
