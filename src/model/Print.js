const MissionUtils = require('@woowacourse/mission-utils');
const {CONSOLELINE, RESULTLINE} = require('../utils/Constants');

function printResult(winArr, yieldpercent){
  MissionUtils.Console.print(CONSOLELINE.ANSWER_STATIST);
  MissionUtils.Console.print(RESULTLINE.FIFTH(winArr[4]));
  MissionUtils.Console.print(RESULTLINE.FOURTH(winArr[3]));
  MissionUtils.Console.print(RESULTLINE.THIRD(winArr[2]));
  MissionUtils.Console.print(RESULTLINE.SECOND(winArr[1]));
  MissionUtils.Console.print(RESULTLINE.FIRST(winArr[0]));
  MissionUtils.Console.print(RESULTLINE.TOTAL_PER(yieldpercent));
  MissionUtils.Console.close();
}

module.exports = printResult;