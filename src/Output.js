const MissionUtils = require('@woowacourse/mission-utils');

class Output {
  printUserLottoCount(lottoCount) {
    MissionUtils.Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printUserLottoNumber(randomLotto) {
    MissionUtils.Console.print(randomLotto);
  }
}

module.exports = Output;
