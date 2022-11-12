const { PRIZE_MONEY } = require('./constant');

class Calculate {
  constructor(controller) {
    this.controller = controller;
  }

  getEarningRate(result) {
    const earningRate = (
      (Calculate.#getProfits(result) / this.controller.totalAmount) *
      100
    ).toFixed(1);

    return earningRate;
  }

  static #getProfits(results) {
    const PRIZE_MONEYS = [
      PRIZE_MONEY.FIFTH_RANKING,
      PRIZE_MONEY.FORTH_RANKING,
      PRIZE_MONEY.THIRD_RANKING,
      PRIZE_MONEY.SECOND_RANKING,
      PRIZE_MONEY.FIRST_RANKING,
    ];
    let grossEarnings = 0;

    results.forEach((result, index) => {
      grossEarnings += result * PRIZE_MONEYS[index];
    });

    return grossEarnings;
  }
}

module.exports = Calculate;
