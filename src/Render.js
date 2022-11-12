const { Console } = require('@woowacourse/mission-utils');

const { RENDER_MESSAGE, MESSAGE } = require('./constants');

class Render {
  static issuedLottoList(countOfLottos, lottos) {
    Console.print(RENDER_MESSAGE.purchaseNotification(countOfLottos));
    lottos.forEach((lotto) => {
      Console.print(RENDER_MESSAGE.issuedLotto(lotto));
    });
  }

  static WinningStatistics(winningState, rateOfReturn) {
    Console.print(MESSAGE.STATISTICS_NOTIFICATION);
    Console.print(MESSAGE.DIVISION_LINE);
    Console.print(RENDER_MESSAGE.matchThree(winningState.fifth));
    Console.print(RENDER_MESSAGE.matchFour(winningState.fourth));
    Console.print(RENDER_MESSAGE.matchFiveAndBonus(winningState.third));
    Console.print(RENDER_MESSAGE.matchFive(winningState.second));
    Console.print(RENDER_MESSAGE.matchSix(winningState.first));
    Console.print(RENDER_MESSAGE.rateOfReturn(rateOfReturn));
  }
}

module.exports = Render;
