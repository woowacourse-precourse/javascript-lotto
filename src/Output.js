const MissionUtils = require('@woowacourse/mission-utils');

class Output {
  printUserLottoCount(lottoCount) {
    MissionUtils.Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printUserLottoNumber(randomLotto) {
    const convertedNumber = String(randomLotto).replace(/,/g, ', ');
    MissionUtils.Console.print('[' + convertedNumber + ']');
  }
}

module.exports = Output;
