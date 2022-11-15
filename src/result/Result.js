const MissionUtils = require("@woowacourse/mission-utils");

class Result {
  constructor() {}
  showResult(GRADE, RESULT) {
    console.log(`\n당첨 통계`);
    console.log(`---`);
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${GRADE[4]}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${GRADE[3]}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${GRADE[2]}개`);
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (30,000,000원) - ${GRADE[1]}개`
    );
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${GRADE[0]}개`);
    MissionUtils.Console.print(`총 수익률은 ${RESULT}%입니다.`);
    MissionUtils.Console.close();
  }
}

module.exports = Result;
