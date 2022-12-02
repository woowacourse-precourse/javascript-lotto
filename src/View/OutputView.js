const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = {
  printPurchaseList(lottoAmount, lottos) {
    MissionUtils.Console.print(`${lottoAmount}개를 구매했습니다.`);
    lottos.forEach((lottoNumbers) => {
      const a = lottoNumbers.join(', ');
      MissionUtils.Console.print(`[${a}]`);
    });
  },
  printResult(result, profit) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${result.fifth}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${result.fourth}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${result.third}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.second}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${result.first}개`);
    MissionUtils.Console.print(`총 수익률은 ${profit}%입니다.`);
    MissionUtils.Console.close();
  },
};

module.exports = OutputView;
