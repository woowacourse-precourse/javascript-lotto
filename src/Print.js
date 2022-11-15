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
  static result(reward, rinking, money) {
    MissionUtils.Console.print('당첨 통계\n---');
    MissionUtils.Console.print(
      `3개 일치 (${PRIZES[String('5등')]}) - ${rinking[String('5등')]}개`
    );
    MissionUtils.Console.print(
      `4개 일치 (${PRIZES[String('4등')]}) - ${rinking[String('4등')]}개`
    );
    MissionUtils.Console.print(
      `5개 일치 (${PRIZES[String('3등')]}) - ${rinking[String('3등')]}개`
    );
    MissionUtils.Console.print(
      `5개 일치, 보너스 볼 일치 (${PRIZES[String('2등')]}) - ${
        rinking[String('2등')]
      }개`
    );
    MissionUtils.Console.print(
      `6개 일치 (${PRIZES[String('1등')]}) - ${rinking[String('1등')]}개`
    );
    const yielRate = (reward / money) * 100;
    MissionUtils.Console.print(`총 수익률은 ${yielRate.toFixed(1)}%입니다.`);
    MissionUtils.Console.close();
  }
}
module.exports = Print;
