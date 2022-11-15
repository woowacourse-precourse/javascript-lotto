const MissionUtils = require('@woowacourse/mission-utils');

module.exports = {
  printLottoAmount(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },

  printWinStatistics(winHistory) {
    MissionUtils.Console.print(
      '당첨 통계\n'
        + '---\n'
        + `3개 일치 (5,000원) - ${winHistory[4]}개\n`
        + `4개 일치 (50,000원) - ${winHistory[3]}개\n`
        + `5개 일치 (1,500,000원) - ${winHistory[2]}개\n`
        + `5개 일치, 보너스 볼 일치 (30,000,000원) - ${winHistory[1]}개\n`
        + `6개 일치 (2,000,000,000원) - ${winHistory[0]}개\n`,
    );
  },

  printRevenueRate(revenueRate) {
    MissionUtils.Console.print(`총 수익률은 ${revenueRate}%입니다.`);
  },
};
