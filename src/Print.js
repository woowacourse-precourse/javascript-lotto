const MissionUtils = require('@woowacourse/mission-utils');
const { PRIZES } = require('./common/constants');
class Print {
  static myLotto(lotto) {
    lotto.forEach((v) => {
      const lottoNum = v.join(', ');
      MissionUtils.Console.print(`[${lottoNum}]`);
    });
  }
  static countLotto(countLotto) {
    MissionUtils.Console.print(`${countLotto}개를 구매했습니다.`);
  }
  static result(reward, ranking, money) {
    MissionUtils.Console.print('당첨 통계\n---');
    let j = 5;
    let count = 0;
    let i = 3;
    while (i <= 6) {
      if (i === 6 && count === 1) {
        MissionUtils.Console.print(
          `${i - 1}개 일치, 보너스 볼 일치 (${PRIZES[j]}) - ${ranking[j]}개`
        );
        count--;
        j--;
        continue;
      }
      if (i === 5) count++;
      MissionUtils.Console.print(`${i}개 일치 (${PRIZES[j]}) - ${ranking[j]}개`);
      j--;
      i++;
    }

    const yielRate = (reward / money) * 100;
    MissionUtils.Console.print(`총 수익률은 ${yielRate.toFixed(1)}%입니다.`);
    MissionUtils.Console.close();
  }
}
module.exports = Print;
