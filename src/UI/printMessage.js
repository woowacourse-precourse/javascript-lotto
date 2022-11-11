const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = {
  BUY_MESSAGE: '개를 구매했습니다.',
};
const printMessage = {
  printLottos(LottosArray) {
    MissionUtils.Console.print(`${LottosArray.length}${MESSAGE.BUY_MESSAGE}`);
    LottosArray.forEach((Lotto) => {
      MissionUtils.Console.print(Lotto.lottoNumbers);
    });
  },
};

module.exports = printMessage;
