const { RANK, RANK_COUNT, RANK_REWARDS } = require('./constants/lotto');

class LottoComparer {
  constructor(buyer, lotto) {
    this.buyer = buyer;
    this.lotto = lotto;
  }

  setRanking() {
    const ranking = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
    };

    this.buyer.lotto.forEach((buyerLotto) => {
      const rank = this.#getLottoRank(buyerLotto);

      if (!rank) {
        return;
      }

      ranking[rank] += 1;
    });

    this.ranking = ranking;
  }

  #getLottoRank(buyerLotto) {
    const matchingCount = this.#getMatchingCount(buyerLotto, this.lotto.numbers);

    if (this.#isSecondRank(matchingCount, buyerLotto)) {
      return RANK.SECOND;
    }

    const rank =
      {
        [RANK_COUNT.FIFTH]: RANK.FIFTH,
        [RANK_COUNT.FOURTH]: RANK.FOURTH,
        [RANK_COUNT.THIRD]: RANK.THIRD,
        [RANK_COUNT.FIRST]: RANK.FIRST,
      }[matchingCount] ?? undefined;

    return rank;
  }

  #isSecondRank(matchingCount, buyerLotto) {
    return matchingCount === RANK_COUNT.THIRD && buyerLotto.includes(this.lotto.bonusNumber);
  }

  #getMatchingCount(buyerLotto) {
    const matchingNumbers = buyerLotto.filter((number) => this.#isIncludeLotto(number));
    return matchingNumbers.length;
  }

  #isIncludeLotto(number) {
    return this.lotto.numbers.includes(number);
  }

  setProfitRate() {
    const totalReward = this.#getTotalReward();
    const profitRate = (totalReward / this.buyer.money) * 100;

    this.profitRate = profitRate.toFixed(1);
  }

  #getTotalReward() {
    const totalReward = Object.keys(RANK).reduce((acc, cur) => {
      const rank = RANK[cur];
      const count = this.ranking[rank];
      const reward = RANK_REWARDS[cur];

      return acc + count * reward;
    }, 0);

    return totalReward;
  }
}

module.exports = LottoComparer;
