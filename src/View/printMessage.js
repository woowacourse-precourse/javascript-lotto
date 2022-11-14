const MissionUtils = require('@woowacourse/mission-utils');
const MESSAGE = {
  BUY_MESSAGE: '개를 구매했습니다.',
  FIFTH_RANKING_MESSAGE: '3개 일치 (5,000원) - ',
  FOURTH_RANKING_MESSAGE: '4개 일치 (50,000원) - ',
  THIRD_RANKING_MESSAGE: '5개 일치 (1,500,000원) - ',
  SECOND_RANKING_MESSAGE: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  FIRST_RANKING_MESSAGE: '6개 일치 (2,000,000,000원) - ',
  YIELD_MESSAGE: {
    FIRST: '총 수익률은 ',
    END: '%입니다.',
  },
};

const printMessage = {
  printLottos(LottosArray) {
    MissionUtils.Console.print(`${LottosArray.length}${MESSAGE.BUY_MESSAGE}`);
    LottosArray.forEach((Lotto) => {
      MissionUtils.Console.print(
        `[${String(Lotto.lottoNumbers).replace(/,/g, ', ')}]`
      );
    });
  },

  printResult(resultObject) {
    MissionUtils.Console.print(
      `${MESSAGE.FIFTH_RANKING_MESSAGE}${resultObject.three}개`
    );
    MissionUtils.Console.print(
      `${MESSAGE.FOURTH_RANKING_MESSAGE}${resultObject.four}개`
    );
    MissionUtils.Console.print(
      `${MESSAGE.THIRD_RANKING_MESSAGE}${resultObject.five}개`
    );
    MissionUtils.Console.print(
      `${MESSAGE.SECOND_RANKING_MESSAGE}${resultObject.fiveAndBonus}개`
    );
    MissionUtils.Console.print(
      `${MESSAGE.FIRST_RANKING_MESSAGE}${resultObject.six}개`
    );
  },
  printYield(yieldPer) {
    MissionUtils.Console.print(
      `${MESSAGE.YIELD_MESSAGE.FIRST}${yieldPer}${MESSAGE.YIELD_MESSAGE.END}`
    );
  },
};

module.exports = printMessage;
