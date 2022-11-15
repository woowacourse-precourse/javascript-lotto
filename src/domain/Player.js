const LottoStore = require('./LottoStore');
const { getMatchedNumberCount } = require('../utils/common');
const { RESULT } = require('../utils/constants');

class Player {
  purchasedLottos = [];
  purchasedAmount = 0;
  statistic = {
    FIRST: 0,
    SECOND: 0,
    THIRD: 0,
    FOURTH: 0,
    FIFTH: 0,
  };

  constructor() {}

  #getLottoResult(lottoWinningNumbers, bonusNumber, purchasedLotto) {
    let matchedNumberCount = getMatchedNumberCount(lottoWinningNumbers, purchasedLotto);

    switch (matchedNumberCount) {
      case 6:
        return RESULT.FIRST;
      case 5:
        if (purchasedLotto.includes(bonusNumber)) return RESULT.SECOND;
        return RESULT.THIRD;
      case 4:
        return RESULT.FOURTH;
      case 3:
        return RESULT.FIFTH;
      default:
        return RESULT.LAST;
    }
  }

  purchaseLottos(purchasedAmount) {
    this.purchasedAmount += purchasedAmount;
    this.purchasedLottos = [...this.purchasedLottos, ...LottoStore.getGeneratedLottos(purchasedAmount)];
  }

  getPurchasedLottos() {
    return this.purchasedLottos;
  }

  getPurchasedLottosCount() {
    return this.purchasedLottos.length;
  }

  getPurchasedAmount() {
    return this.purchasedAmount;
  }

  calculateStatistic(lottoWinningNumbers, bonusNumber) {
    const statistic = {
      FIRST: 0,
      SECOND: 0,
      THIRD: 0,
      FOURTH: 0,
      FIFTH: 0,
    };

    for (const purchasedLotto of this.purchasedLottos) {
      const result = this.#getLottoResult(lottoWinningNumbers, bonusNumber, purchasedLotto);

      switch (result) {
        case RESULT.FIRST:
          statistic.FIRST += 1;
          continue;
        case RESULT.SECOND:
          statistic.SECOND += 1;
          continue;
        case RESULT.THIRD:
          statistic.THIRD += 1;
          continue;
        case RESULT.FOURTH:
          statistic.FOURTH += 1;
          continue;
        case RESULT.FIFTH:
          statistic.FIFTH += 1;
          continue;
      }
    }

    this.statistic = statistic;
  }

  getStatistic() {
    return this.statistic;
  }
}

module.exports = Player;
