class LottoComparer {
  static getBuyerLottoRank(buyerLottos, lotto, bonusNumber) {
    const result = { first: 0, second: 0, third: 0, fourth: 0, fifth: 0 };

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

    if (matchingLength === 3) {
      return 'fifth';
    }

    if (matchingLength === 4) {
      return 'fourth';
    }

    if (matchingLength === 5) {
      if (buyerLotto.includes(bonusNumber)) {
        return 'second';
      }

      return 'third';
    }

    if (matchingLength === 6) {
      return 'first';
    }

    return undefined;
  }

  static #compareLotto(buyerLotto, lotto) {
    const matchingNumbers = buyerLotto.filter((number) => lotto.includes(number));
    return matchingNumbers.length;
  }
}

module.exports = LottoComparer;
