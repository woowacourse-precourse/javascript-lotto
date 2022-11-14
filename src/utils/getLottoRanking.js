const { RANKING_ARRAY, SECOND, THIRD, NOTHING } = require('../constants/gameSetting');

function getLottoRanking(lotto, winningLotto) {
  const [winningLottoNumbers, winningLottoBonusNumber] = winningLotto.values();
  const matchCount = lotto.getMatchCount(winningLottoNumbers);
  if (matchCount === SECOND.MATCH_COUNT) {
    return lotto.hasBonusNumber(winningLottoBonusNumber) ? SECOND : THIRD;
  }

  const lottoRanking = RANKING_ARRAY.find((RANK) => matchCount === RANK.MATCH_COUNT);
  return lottoRanking || NOTHING;
}

module.exports = getLottoRanking;
