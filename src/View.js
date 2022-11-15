const MissionUtils = require('@woowacourse/mission-utils');

const View = {
  printUserLotto(userLottoList) {
    MissionUtils.Console.print(`\n${userLottoList.length}개를 구매했습니다.`);
    userLottoList.forEach(lotto => MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`));
  },
  printResult(rankList, userProfit) {
    MissionUtils.Console.print('\n당첨통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${rankList.Fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${rankList.Fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${rankList.Third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankList.Second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${rankList.First}개`);
    MissionUtils.Console.print(`총 수익률은 ${userProfit}%입니다.`);
  },
};
module.exports = View;
