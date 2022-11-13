const RANKING = require('../constants/gameSetting');

function getLottoRanking(lotto, winningLotto) {
  const [winningLottoNumbers, winningLottoBonusNumber] = winningLotto.values();
  const matchCount = lotto.getMatchCount(winningLottoNumbers);

  if (matchCount === 6) return RANKING.FIRST;
  if (matchCount === 5 && lotto.hasBonusNumber(winningLottoBonusNumber)) return RANKING.SECOND;
  if (matchCount === 5) return RANKING.THIRD;
  if (matchCount === 4) return RANKING.FOURTH;
  if (matchCount === 3) return RANKING.FIFTH;
  return RANKING.NOTHING;
}

module.exports = getLottoRanking;
