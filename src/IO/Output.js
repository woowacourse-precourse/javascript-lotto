const MissionUtils = require('@woowacourse/mission-utils');

class Output {
  printUserLottoCount(lottoCount) {
    MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printUserLottoNumber(randomLotto) {
    const convertedNumber = String(randomLotto).replace(/,/g, ', ');
    MissionUtils.Console.print('[' + convertedNumber + ']');
  }

  printResult(score, revenue) {
    MissionUtils.Console.print('\n당첨 통계');
    MissionUtils.Console.print('---');
    MissionUtils.Console.print(`3개 일치 (5,000원) - ${score.three}개`);
    MissionUtils.Console.print(`4개 일치 (50,000원) - ${score.four}개`);
    MissionUtils.Console.print(`5개 일치 (1,500,000원) - ${score.five}개`);
    MissionUtils.Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${score.fivePlusBonus}개`);
    MissionUtils.Console.print(`6개 일치 (2,000,000,000원) - ${score.six}개`);
    MissionUtils.Console.print(`총 수익률은 ${revenue}%입니다.`);
  }
}

module.exports = Output;
