const { RESULT_TXT } = require('./constant');
const MissionUtils = require('@woowacourse/mission-utils');
const Match = require('./Matcher');
const Console = MissionUtils.Console;

class Result {
  printResult(earnings) {
    const earningsString = String(earnings) + '%';

    Console.print(RESULT_TXT.TITLE);
    Console.print(RESULT_TXT.LINE);
    Console.print(RESULT_TXT.MATCH_THREE + `${Match.lottoWinnerNumber[4]}개`);
    Console.print(RESULT_TXT.MATCH_FOUR + `${Match.lottoWinnerNumber[3]}개`);
    Console.print(RESULT_TXT.MATCH_FIVE + `${Match.lottoWinnerNumber[2]}개`);
    Console.print(
      RESULT_TXT.MATCH_FIVE_BONUS + `${Match.lottoWinnerNumber[1]}개`,
    );
    Console.print(RESULT_TXT.MATCH_SIX + `${Match.lottoWinnerNumber[0]}개`);
    Console.print(`\n총 수익률은 ${earningsString}입니다.`);
    Console.close();
  }
}

const RESULT = new Result();

module.exports = RESULT;
