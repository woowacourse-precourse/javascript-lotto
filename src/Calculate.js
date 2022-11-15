const { PRIZE_MONEY } = require('./constant/constantOfLotto');

const { FIFTH, FORTH, THIRD, SECOND, FIRST } = PRIZE_MONEY;

class Calculate {
  constructor(controller) {
    this.controller = controller;
  }

  getYield(result) {
    const earningRate = (
      (Calculate.#getProfits(result) / this.controller.totalAmount) *
      100
    ).toFixed(1);

    return earningRate;
  }

  static #getProfits(results) {
    const RANKING = [
      FIFTH,
      FORTH,
      THIRD,
      SECOND,
      FIRST,
    ];
    let totalEarnings = 0;

    results.forEach((result, index) => {
      totalEarnings += result * RANKING[index];
    });

    return totalEarnings;
  }
}

module.exports = Calculate;