const MissionUtils = require('@woowacourse/mission-utils');
const {
  SIX_MATCH_REWARD,
  BONUS_MATCH_REWARD,
  FIVE_MATCH_REWARD,
  FOUR_MATCH_REWARD,
  THREE_MATCH_REWARD
} = require('./constants/numbers.js');

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

  printLottoWinningStats(result) {
    MissionUtils.Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${result[5]}개\n4개 일치 (50,000원) - ${result[4]}개\n5개 일치 (1,500,000원) - ${result[3]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${result[2]}개\n6개 일치 (2,000,000,000원) - ${result[1]}개\n총 수익률은 ${result['returnRate']}%입니다.`
    );
  }
}

module.exports = LottoViewer;
