const { PRIZE_MONEY } = require('./constant');

const { FIFTH_RANKING, FORTH_RANKING, THIRD_RANKING, SECOND_RANKING, FIRST_RANKING } = PRIZE_MONEY;

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
      FIFTH_RANKING,
      FORTH_RANKING,
      THIRD_RANKING,
      SECOND_RANKING,
      FIRST_RANKING,
    ];
    let grossEarnings = 0;

    results.forEach((result, index) => {
      grossEarnings += result * PRIZE_MONEYS[index];
    });

    return grossEarnings;
  }
}

module.exports = Calculate;
