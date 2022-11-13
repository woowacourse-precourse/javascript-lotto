const {
  SIX_MATCH_REWARD,
  BONUS_MATCH_REWARD,
  FIVE_MATCH_REWARD,
  FOUR_MATCH_REWARD,
  THREE_MATCH_REWARD
} = require('./constants/numbers');

class LottoViewer {
  arrangeLottoWinningResult(ranks, money) {
    const result = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, returnRate: 0 };
    for (const element of ranks) {
      result[element] = (result[element] || 0) + 1;
    }
    const totalIncome =
      SIX_MATCH_REWARD * result[1] +
      BONUS_MATCH_REWARD * result[2] +
      FIVE_MATCH_REWARD * result[3] +
      FOUR_MATCH_REWARD * result[4] +
      THREE_MATCH_REWARD * result[5];
    result['returnRate'] = ((totalIncome / money) * 100).toFixed(1);
    return result;
  }
}

module.exports = LottoViewer;
