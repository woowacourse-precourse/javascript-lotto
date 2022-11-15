const MissionUtils = require('@woowacourse/mission-utils');

class Print {
  static myLotto(lotto) {
    lotto.forEach((v) => MissionUtils.Console.print(v));
  }
  static countLotto(countLotto) {
    MissionUtils.Console.print(`${countLotto}개를 구매하셨습니다.`);
  }
}
module.exports = Print;
