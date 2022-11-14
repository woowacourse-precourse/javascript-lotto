const { RANK, RANK_LENGTH } = require('./constants/lotto');

class LottoComparer {
  constructor(buyer, lotto) {
    this.buyer = buyer;
    this.lotto = lotto;
  }

  setBuyerLottoRanking() {
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
    const matchingLength = this.#compareLotto(buyerLotto, this.lotto.numbers);

    if (this.#isSecondRank(matchingLength, buyerLotto)) {
      return RANK.SECOND;
    }

    const rank =
      {
        [RANK_LENGTH.FIFTH]: RANK.FIFTH,
        [RANK_LENGTH.FOURTH]: RANK.FOURTH,
        [RANK_LENGTH.THIRD]: RANK.THIRD,
        [RANK_LENGTH.FIRST]: RANK.FIRST,
      }[matchingLength] ?? undefined;

    return rank;
  }

  #isSecondRank(matchingLength, buyerLotto) {
    return matchingLength === RANK_LENGTH.THIRD && buyerLotto.includes(this.lotto.bonusNumber);
  }

  #compareLotto(buyerLotto) {
    const matchingNumbers = buyerLotto.filter((number) => this.#isIncludeLotto(number));
    return matchingNumbers.length;
  }

  #isIncludeLotto(number) {
    return this.lotto.numbers.includes(number);
  }
}

module.exports = LottoComparer;
