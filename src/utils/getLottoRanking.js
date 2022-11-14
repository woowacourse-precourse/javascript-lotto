const { RANKING, RANKING_ARRAY } = require('../constants/gameSetting');

function getLottoRanking(lotto, winningLotto) {
  const [winningLottoNumbers, winningLottoBonusNumber] = winningLotto.values();
  const matchCount = lotto.getMatchCount(winningLottoNumbers);
  if (matchCount === RANKING.SECOND.MATCH_COUNT) {
    return lotto.hasBonusNumber(winningLottoBonusNumber) ? RANKING.SECOND : RANKING.THIRD;
  }

  const ranking = RANKING_ARRAY.find((RANK) => matchCount === RANK.MATCH_COUNT);
  return ranking || RANKING.NOTHING;
}

module.exports = getLottoRanking;
