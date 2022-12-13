const { Console } = require('@woowacourse/mission-utils');
const MESSAGE = require('../constants/lottoMessage');

const OutputView = {
  printLottos(lotteries) {
    Console.print(`\n${lotteries.getSaleQuantity()
      + MESSAGE.PROCESS.showTicketQuantity
      + lotteries.getLottoArray()}`);
  },

  printResult(lotteries) {
    Console.print(`\n${MESSAGE.PRIZE.showPrizeNotice}`);
    Object.entries(lotteries.getRankGroup()).forEach(
      ([rank, quantity]) => {
        Console.print(`${MESSAGE.PRIZE[rank]} - ${quantity}개`);
      },
    );
  },

  printProfit(accounting) {
    Console.print(`총 수익률은 ${accounting.getProfitRate()}%입니다.`);
  },
};

module.exports = OutputView;
