const MissionUtils = require('@woowacourse/mission-utils');
const { PRIZES } = require('./common/constants');
class Print {
  static myLotto(lotto) {
    lotto.forEach((v) => MissionUtils.Console.print(v));
  }
  static countLotto(countLotto) {
    MissionUtils.Console.print(`${countLotto}개를 구매하셨습니다.`);
  }
  static result(reward, rinking, money) {
    MissionUtils.Console.print('당첨 통계');
    MissionUtils.Console.print('-------');
    let j = 3;
    for (let i = 5; i >= 1; i--) {
      MissionUtils.Console.print(
        `${j}개 일치 (${PRIZES[String(i + '등')]}) - ${
          rinking[String(i + '등')]
        }개`
      );
      j++;
    }
    const yielRate = (reward / money) * 100;
    MissionUtils.Console.print(`총 수익률은 ${yielRate.toFixed(2)}%입니다.`);
    MissionUtils.Console.close();
  }
}
module.exports = Print;
