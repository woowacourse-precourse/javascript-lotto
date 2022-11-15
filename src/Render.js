const { Console } = require('@woowacourse/mission-utils');

const { RENDER_MESSAGE, MESSAGE, RANK } = require('./constants');

class Render {
  static issuedLottoList(countOfLottos, userLottos) {
    Console.print(RENDER_MESSAGE.purchaseNotification(countOfLottos));
    userLottos.forEach((lotto) => {
      Console.print(RENDER_MESSAGE.issuedLotto(lotto));
    });
  }

  static WinningStatistics([winningState, rateOfReturn]) {
    Console.print(MESSAGE.STATISTICS_NOTIFICATION);
    Console.print(MESSAGE.DIVISION_LINE);
    Console.print(RENDER_MESSAGE.matchThree(winningState[RANK.FIVE]));
    Console.print(RENDER_MESSAGE.matchFour(winningState[RANK.FOUR]));
    Console.print(RENDER_MESSAGE.matchFive(winningState[RANK.THREE]));
    Console.print(RENDER_MESSAGE.matchFiveAndBonus(winningState[RANK.TWO]));
    Console.print(RENDER_MESSAGE.matchSix(winningState[RANK.ONE]));
    Console.print(RENDER_MESSAGE.rateOfReturn(rateOfReturn));
  }
}

module.exports = Render;
