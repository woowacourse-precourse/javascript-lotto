const Ranking = require('./Ranking');

class Prize {
  static #rankings = [
    [3, 5000],
    [4, 50000],
    [5, 1500000],
    [5, 30000000, true],
    [6, 2000000000],
  ].map((rankingValue) => new Ranking(...rankingValue));

  static #getRankByEachPurchase(sameNumberCount, isPurchaseIncludingBonus) {
    const secondPlace = Prize.#rankings[Prize.#rankings.findIndex(({ hasBonus }) => hasBonus)];
    const isSecondPlace = sameNumberCount === secondPlace.criteria && isPurchaseIncludingBonus;

    if (isSecondPlace) {
      secondPlace.count += 1;
      return;
    }

    const prizeIndex = Prize.#rankings.map(({ criteria }) => criteria).indexOf(sameNumberCount);
    Prize.#rankings[prizeIndex].count += 1;
  }

  static #compareEachPurchaseWithWinningNumbers(
    purchase,
    winningNumbers,
    bonusNumber,
    lastPlaceCriteria,
  ) {
    const sameNumberCount = purchase.reduce((acc, cur) => {
      if (winningNumbers.includes(cur)) acc += 1;

      return acc;
    }, 0);

    const isPurchaseIncludingBonus = purchase.includes(bonusNumber);

    if (sameNumberCount >= lastPlaceCriteria) {
      Prize.#getRankByEachPurchase(sameNumberCount, isPurchaseIncludingBonus);
    }
  }

  static compareAllPurchasesWithWinningNumbers(purchases, winningNumbers, bonusNumber) {
    const lastPlaceCriteria = Prize.#rankings[0].criteria;

    purchases.forEach((purchase) => {
      Prize.#compareEachPurchaseWithWinningNumbers(
        purchase,
        winningNumbers,
        bonusNumber,
        lastPlaceCriteria,
      );
    });

    return Prize.#rankings;
  }
}

module.exports = Prize;
