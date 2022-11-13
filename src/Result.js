const MissionUtils = require('@woowacourse/mission-utils');
const Match = require('./Matcher');
const Console = MissionUtils.Console;

class Result {
  printResult(earnings) {
    const earningsString = String(earnings) + '%';

    Console.print(
      `\n당첨 통계\n---\n3개 일치 (5,000원) - ${Match.lottoWinnerNumber[4]}개\n4개 일치 (50,000원) - ${Match.lottoWinnerNumber[3]}개\n5개 일치 (1,500,000원) - ${Match.lottoWinnerNumber[2]}개\n5개 일치, 보너스 볼 일치 (30,000,000원) - ${Match.lottoWinnerNumber[1]}개\n6개 일치 (2,000,000,000원) - ${Match.lottoWinnerNumber[0]}개\n총 수익률은 ${earningsString}입니다.`,
    );
    Console.close();
  }
}

const RESULT = new Result();

module.exports = RESULT;
