const {
  RANKING_ARRAY,
  SECOND,
  THIRD,
  NOTHING,
  DECIMAL_PLACE_OF_PROFIT_RATE,
  UNIT_OF_AMOUNT,
} = require('./constants/gameSetting');

class LottoStatistics {
  static calculateProfitRate(totalPrizeMoney, totalPurchaseAmount) {
    const profitRate = (totalPrizeMoney / totalPurchaseAmount) * 100;
    return profitRate.toFixed(DECIMAL_PLACE_OF_PROFIT_RATE);
  }

  static getLottoRanking(lotto, winningLotto) {
    const [winningLottoNumbers, winningLottoBonusNumber] = winningLotto.values();
    const matchCount = lotto.getMatchCount(winningLottoNumbers);
    if (matchCount === SECOND.MATCH_COUNT) {
      return lotto.hasBonusNumber(winningLottoBonusNumber) ? SECOND : THIRD;
    }

    const lottoRanking = RANKING_ARRAY.find((RANK) => matchCount === RANK.MATCH_COUNT);
    return lottoRanking || NOTHING;
  }

  static getLottosResult(lottos, winningLotto) {
    let lottosResult = [];
    lottos.forEach((lotto) => lottosResult.push(this.getLottoRanking(lotto, winningLotto)));

    return lottosResult;
  }

  static collectLottoStatistics(lottos, winningLotto) {
    let totalPrizeMoney = 0;
    const totalPurchaseAmount = lottos.size * UNIT_OF_AMOUNT;
    const lottosResult = this.getLottosResult(lottos, winningLotto);
    const lottoStatistics = [...RANKING_ARRAY, NOTHING].reduce(
      (acc, { NAME }) => ({ ...acc, [NAME]: 0 }),
      {}
    );

    lottosResult.forEach(({ PRIZE_MONEY, NAME }) => {
      totalPrizeMoney += PRIZE_MONEY;
      lottoStatistics[NAME] += 1;
    });

    lottoStatistics.profitRate = this.calculateProfitRate(totalPrizeMoney, totalPurchaseAmount);
    return lottoStatistics;
  }
}

module.exports = LottoStatistics;
