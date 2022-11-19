const { PRIZE_MONEY } = require('./constant');

class PrizeStatus {
  #prizeStatus;

  constructor(lottos, winningNumbers, bonusNumber) {
    const prizeStatus = this.makePrizeStatus(lottos, winningNumbers, bonusNumber);
    this.#prizeStatus = prizeStatus;
  }

  get() {
    return this.#prizeStatus;
  }

  makePrizeStatus(lottos, winningNumbers, bonusNumber) {
    const prizeStatus = {
      fifth: 0,
      fourth: 0,
      third: 0,
      second: 0,
      first: 0,
    };

    lottos.forEach((lotto) => {
      const totalNumbersCount = lotto.length + winningNumbers.length;
      const uniqueNumbersCount = new Set([...lotto, ...winningNumbers]).size;
      const matchingNumbersCount = totalNumbersCount - uniqueNumbersCount;
      const isMatchingBonusNumber = lotto.includes(bonusNumber);

      if (matchingNumbersCount === 3) prizeStatus.fifth += 1;
      if (matchingNumbersCount === 4) prizeStatus.fourth += 1;
      if (matchingNumbersCount === 5) prizeStatus.third += 1;
      if (matchingNumbersCount === 5 && isMatchingBonusNumber) prizeStatus.second += 1;
      if (matchingNumbersCount === 6) prizeStatus.first += 1;
    });

    return prizeStatus;
  }

  calculateEarningsRate(purchaseAmount) {
    const totalEarnings = Object.entries(this.#prizeStatus).reduce(
      (currentEarnings, [prize, count]) => currentEarnings + PRIZE_MONEY[prize] * count,
      0,
    );

    const earningsRate = (totalEarnings / purchaseAmount) * 100;
    const earningsRateFloat = earningsRate.toFixed(1);
    const [integer, decimal] = earningsRateFloat.split('.');
    const formattedEarningsRate = `${Number(integer).toLocaleString()}.${decimal}`;

    return formattedEarningsRate;
  }
}

module.exports = PrizeStatus;
