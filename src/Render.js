const { Console } = require('@woowacourse/mission-utils');

const { RENDER_MESSAGE } = require('./constants');

class Render {
  static issuedLottoList(count, lottoList) {
    Console.print(RENDER_MESSAGE.purchaseNotification(count));
    lottoList.forEach((lottoNumber) => {
      Console.print(RENDER_MESSAGE.issuedLotto(lottoNumber));
    });
  }

  static winningResult(prizeResult) {
    Console.print(RENDER_MESSAGE.matchThree(prizeResult.fifth));
    Console.print(RENDER_MESSAGE.matchFour(prizeResult.fourth));
    Console.print(RENDER_MESSAGE.matchFiveAndBonus(prizeResult.third));
    Console.print(RENDER_MESSAGE.matchFive(prizeResult.second));
    Console.print(RENDER_MESSAGE.matchSix(prizeResult.first));
  }

  static rateOfReturn(rateOfReturn) {
    Console.print(RENDER_MESSAGE.rateOfReturn(rateOfReturn));
  }
}

module.exports = Render;
