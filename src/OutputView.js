const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  message: {
    COUNT: '개를 구매했습니다.',

    statistics: {
      HEADING: '당첨 통계\n---',
      CRITERIA: '개 일치',
      COUNT: '개',
      BONUS: ', 보너스 볼 일치',

      getMoney(money) {
        return `(${money.toLocaleString('en-US')}원)`;
      },

      getProfitRate(profitRate) {
        return `총 수익률은 ${profitRate}%입니다.`;
      },
    },
  },

  printPurchase(count, issueLottos) {
    const { COUNT } = OutputView.message;
    const countMessage = `${count}${COUNT}`;
    const issuedLottosMessage = issueLottos.map((lotto) => `[${lotto.join(', ')}]`).join('\n');

    Console.print(`\n${countMessage}\n${issuedLottosMessage}`);
  },

  getPrizeResultMessage(prizeResult) {
    const { CRITERIA, COUNT, BONUS, getMoney } = OutputView.message.statistics;
    return prizeResult
      .reverse()
      .map(
        ({ criteria, money, hasBonus, count }) =>
          `${criteria}${CRITERIA}${hasBonus ? BONUS : ''} ${getMoney(money)} - ${count}${COUNT}`,
      )
      .join('\n');
  },

  printStatistics(prizeResult, profitRate) {
    const { HEADING, getProfitRate } = OutputView.message.statistics;
    const prizeResultMessage = OutputView.getPrizeResultMessage(prizeResult);

    const profitRateMessage = `${getProfitRate(profitRate)}`;
    const statisticsMessage = `\n${HEADING}\n${prizeResultMessage}\n${profitRateMessage}`;

    Console.print(statisticsMessage);
  },
};

module.exports = OutputView;
