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
    let earningRate = 0;
    let index = 0;
    for (let key in winPlace) {
      earningRate += winPlace[key] * prizes[index];
      index += 1;
    }
    earningRate = (earningRate / purchase) * UTILS.PERCENT;
    return Number(earningRate.toFixed(1));
  }
}

module.exports = EarningRate;
