const LottoSystem = require("./LottoSystem");
const Lotto = require("../Lotto");
const Utils = require("../Utils");
const { RANK } = require("../constants");

const MATCH_COUNT = Object({
  SIX: 6,
  FIVE: 5,
  FOUR: 4,
  THREE: 3,
});

const RANK_MAP = Object({
  [MATCH_COUNT.SIX]: RANK.ONE,
  [MATCH_COUNT.FOUR]: RANK.FOUR,
  [MATCH_COUNT.THREE]: RANK.FIVE,
});

const REWARD_MAP = Object({
  [RANK.ONE]: 2000000000,
  [RANK.TWO]: 30000000,
  [RANK.THREE]: 1500000,
  [RANK.FOUR]: 50000,
  [RANK.FIVE]: 5000,
});

class LottoStatistics extends LottoSystem {
  constructor(winningLotto) {
    super();
    if (!winningLotto instanceof Lotto) {
      throw new ReferenceError("[ERROR] param's instance must be Lotto.");
    }
    if (!winningLotto.bonusNumber) {
      throw new ReferenceError("[ERROR] Lotto must have bonus number.");
    }
    this.winningNumbers = winningLotto.numbers;
    this.bonusNumber = winningLotto.bonusNumber;
  }

  matchCount(numbers) {
    const numbersSet = new Set(numbers);
    const winningNumbersSet = new Set(this.winningNumbers);
    const matchedNumbersSet = Utils.intersect(numbersSet, winningNumbersSet);
    return [...matchedNumbersSet].length;
  }

  getRank(numbers) {
    const matchedCount = this.matchCount(numbers);
    if (matchedCount === MATCH_COUNT.FIVE) {
      const isMatchBonusNumber = numbers.includes(this.bonusNumber);
      return isMatchBonusNumber ? RANK.TWO : RANK.THREE;
    }
    return RANK_MAP[matchedCount] || RANK.UN_RANK;
  }

  createRankCounter(buyingLottos) {
    const filteredRanks = buyingLottos
      .map((buyingLotto) => this.getRank(buyingLotto))
      .filter((rank) => rank !== RANK.UN_RANK);
    return Utils.createCounter(filteredRanks);
  }

  getTotalReward(buyingLottos) {
    const rankCounter = this.createRankCounter(buyingLottos);
    return Object.entries(rankCounter).reduce((total, [rank, count]) => {
      const reward = REWARD_MAP[rank] * count;
      return total + reward;
    }, 0);
  }

  getProfit(buyingLottos) {
    const totalReward = this.getTotalReward(buyingLottos);
    const cost = buyingLottos.length * this.moneyUnit;
    return (totalReward / cost) * 100;
  }
}

module.exports = LottoStatistics;
