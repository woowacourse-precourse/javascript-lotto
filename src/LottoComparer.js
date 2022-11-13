const { RANK, RANK_LENGTH } = require('./constants/lotto');

class LottoComparer {
  static getBuyerLottoRank(buyerLottos, lotto, bonusNumber) {
    const result = {
      [RANK.FIRST]: 0,
      [RANK.SECOND]: 0,
      [RANK.THIRD]: 0,
      [RANK.FOURTH]: 0,
      [RANK.FIFTH]: 0,
    };

    buyerLottos.forEach((buyerLotto) => {
      const rank = LottoComparer.#getLottoRank(buyerLotto, lotto, bonusNumber);

      if (!rank) {
        return;
      }

      result[rank] += 1;
    });

    return result;
  }

  static #getLottoRank(buyerLotto, lotto, bonusNumber) {
    const matchingLength = LottoComparer.#compareLotto(buyerLotto, lotto);

    if (matchingLength === RANK_LENGTH.THIRD && buyerLotto.includes(bonusNumber)) {
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

  static #compareLotto(buyerLotto, lotto) {
    const matchingNumbers = buyerLotto.filter((number) => lotto.includes(number));
    return matchingNumbers.length;
  }
}

module.exports = LottoComparer;
