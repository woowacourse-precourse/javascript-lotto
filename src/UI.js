const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./Constant');
const { getRateOfReturn } = require('./Utils');

const Utils = require('./Utils');

class UI {
  static printLottos(lottos) {
    for (const lotto of lottos) {
      lotto.print();
    }
  }

  static printResult(result, lottoCount) {
    Console.print(MESSAGE.RESULT);
    this.printRankResult(result);
    Console.print(MESSAGE.REWARD(getRateOfReturn(result, lottoCount)));
  }

  static printRankResult(result) {
    const ranks = Utils.getRewardKey();

    for (const rank of ranks) {
      Console.print(MESSAGE[rank](result[rank]));
    }
  }

  static printLottoCount(lottoCount) {
    Console.print(MESSAGE.PRINT_LOTTO_COUNT(lottoCount));
  }
}

module.exports = UI;
