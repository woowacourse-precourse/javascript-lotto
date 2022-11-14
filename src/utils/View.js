const { Console } = require('@woowacourse/mission-utils');
const GAME_MESSAGE = require('../constant/gameMessage');
const STRING = require('../constant/string');

class View {
  static lottos(lottoCount, lottoArr) {
    Console.print(GAME_MESSAGE.HOW_MANY_BUY_LOTTO_MESSAGE(lottoCount));
    lottoArr.map(lotto => {
      Console.print(GAME_MESSAGE.LOTTO_PRINT(lotto.join(STRING.COMMA_AND_SPACE)));
    });
  }

  static winStatistics(lottoResultArr, rateOfReturn) {
    Console.print(
      GAME_MESSAGE.WIN_STATISTICS_MESSAGE(lottoResultArr, rateOfReturn),
    );
    Console.close();
  }
}

module.exports = View;
