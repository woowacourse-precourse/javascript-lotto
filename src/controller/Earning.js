const { RANK, LOTTO_PRIZE, DEFAULT } = require("../utils/constant.js");

class Earning {
  constructor(lottoResult) {
    this.lottoResult = lottoResult;
  }

  getTotalLottoEarning() {
    const rankCountArray = Object.entries(this.lottoResult);
    const totalEarning = rankCountArray.reduce(
      (total, [rank, count]) => (total += this.convertRankToPrize(rank, count)),
      DEFAULT.ZERO,
    );

    return totalEarning;
  }

  convertRankToPrize(rank, count) {
    switch (rank) {
      case RANK[1]:
        return LOTTO_PRIZE.FIRST * count;
      case RANK[2]:
        return LOTTO_PRIZE.SECOND * count;
      case RANK[3]:
        return LOTTO_PRIZE.THIRD * count;
      case RANK[4]:
        return LOTTO_PRIZE.FOURTH * count;
      case RANK[5]:
        return LOTTO_PRIZE.FIFTH * count;
      default:
        return;
    }
  }

  getEarningRate(totalEarning, lottoCharge) {
    return ((totalEarning / lottoCharge) * 100).toFixed(1);
  }
}

module.exports = Earning;
