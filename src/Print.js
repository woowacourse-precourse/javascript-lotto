const MissionUtils = require('@woowacourse/mission-utils');

module.exports = {
  printLottoAmount(lottos) {
    MissionUtils.Console.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      MissionUtils.Console.print(`[${lotto.getNumbers().join(', ')}]`);
    });
  },
};
