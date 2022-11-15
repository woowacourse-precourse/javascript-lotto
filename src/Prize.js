const { Console } = require('@woowacourse/mission-utils');
const Ranking = require('./Ranking');
const Message = require('./Message');

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

  static #getWinningLogMessage(rankings) {
    return rankings
      .map(({ criteria, money, hasBonus, count }) => {
        criteria = hasBonus ? `${criteria}개 일치, 보너스 볼 일치` : `${criteria}개 일치`;
        money = `${money.toLocaleString('en-US')}원`;

        return `${criteria} (${money}) - ${count}개`;
      })
      .join('\n');
  }

  static getReturnRate(expense, rankings) {
    const profit = rankings.reduce((acc, cur) => {
      const { money, count } = cur;
      return acc + money * count;
    }, 0);

    const percentage = (profit / expense) * 100;

    return percentage;
  }

  static printLottoResult(expense, purchases, winningNumbers, bonusNumber) {
    const { STATISTICS, printReturnRate } = Message;

    const resultRanking = Prize.compareAllPurchasesWithWinningNumbers(
      purchases,
      winningNumbers,
      bonusNumber,
    );
    const winningLogMessage = Prize.#getWinningLogMessage(resultRanking);
    const returnRate = Prize.getReturnRate(expense, resultRanking).toFixed(1);
    const returnRateMessage = printReturnRate(returnRate.replace(/\B(?=(\d{3})+(?!\d))/g, ','));

    Console.print(`${STATISTICS}\n${winningLogMessage}\n${returnRateMessage}`);
  }
}

module.exports = Prize;
