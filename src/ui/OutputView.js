const { Console } = require('@woowacourse/mission-utils');
const { getRateOfReturn, getEarnedAmount } = require('../utils/common');
const { MESSAGE } = require('../utils/constants');

class OutputView {
  constructor() {}

  static print = (text) => {
    Console.print(text);
  };

  static printBlankLine = () => {
    Console.print('');
  };

  static closeConsole = () => {
    Console.close();
  };

  static printPurchasedLottos = (purchasedLottos) => {
    OutputView.print(`${purchasedLottos.length}개를 구매했습니다.`);
    purchasedLottos.forEach((purchasedLotto) => {
      OutputView.print(`[${purchasedLotto[0]}, ${purchasedLotto[1]}, ${purchasedLotto[2]}, ${purchasedLotto[3]}, ${purchasedLotto[4]}, ${purchasedLotto[5]}]`);
    });
  };

  static printStatistic = (statistic) => {
    OutputView.print(MESSAGE.STATISTIC.TITLE);
    OutputView.print(MESSAGE.STATISTIC.DIVIDER);
    OutputView.print(MESSAGE.STATISTIC.FIFTH(statistic.FIFTH));
    OutputView.print(MESSAGE.STATISTIC.FOURTH(statistic.FOURTH));
    OutputView.print(MESSAGE.STATISTIC.THIRD(statistic.THIRD));
    OutputView.print(MESSAGE.STATISTIC.SECOND(statistic.SECOND));
    OutputView.print(MESSAGE.STATISTIC.FIRST(statistic.FIRST));
  };

  static printRateOfReturn = (purchasedAmount, statistic) => {
    const earnedAmount = getEarnedAmount(statistic);
    const rateOfReturn = getRateOfReturn(earnedAmount, purchasedAmount);
    OutputView.print(MESSAGE.RATE_OF_RETURN(rateOfReturn));
  };

  static printGameTerminationMessage = () => {
    OutputView.print(MESSAGE.TERMINATE_GAME);
  };
}

module.exports = OutputView;
