const { UTILS, PRIZE } = require('../constant/constant');

class EarningRate {
  static getEarningRate({ winPlace, purchase }) {
    const prizes = [
      PRIZE.FIRST_PLACE,
      PRIZE.SECOND_PLACE,
      PRIZE.THIRD_PLACE,
      PRIZE.FOURTH_PLACE,
      PRIZE.FIFTH_PLACE,
    ];
    const rate = EarningRate.#calculateRate({ winPlace, prizes, purchase });
    return Number(rate.toFixed(1));
  }

  static #calculateRate({ winPlace, prizes, purchase }) {
    let earningRate = 0;
    let index = 0;
    for (let key in winPlace) {
      earningRate += winPlace[key] * prizes[index];
      index += 1;
    }
    return (earningRate = (earningRate / purchase) * UTILS.PERCENT);
  }
}

module.exports = EarningRate;
