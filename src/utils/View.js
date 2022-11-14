const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../constant/gameMessage');

class View {
  static lottos(lottoCount, lottoArr) {
    Console.print(GAME_MESSAGE.HOW_MANY_BUY_LOTTO_MESSAGE(lottoCount));
    lottoArr.map((lotto) => {
      const lottoString = this.changeLottoToString(lotto); 
      Console.print(GAME_MESSAGE.LOTTO_PRINT(lottoString));
    });
  }

  static changeLottoToString(lotto) {
    return lotto
      .toString()
      .split('')
      .map(el => {
        if (el === ',') return ', ' ;
        return el;
      })
      .join('');
  }

  static winStatistics(lottoResultObj, rateOfReturn) {
    Console.print(GAME_MESSAGE.WIN_STATISTICS_MESSAGE(lottoResultObj, rateOfReturn));
    Console.close();
  }
}

module.exports = View;
