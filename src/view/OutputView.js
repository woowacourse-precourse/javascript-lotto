const { Console } = require('@woowacourse/mission-utils');
const Prize = require('../domain/result/Prize');

const OutputView = {
  MESSAGE: Object.freeze({
    getLottoCountMessage(lottoCount) {
      return `${lottoCount}개를 구매했습니다.`;
    },
    winningStatsTitleMessage: '당첨 통계\n---',
    getWinningStatsMessage(prize, count) {
      const { amount, matchCount } = prize;
      const hasBonusMessage = prize === Prize.SECOND ? ', 보너스 볼 일치' : '';
      return `${matchCount}개 일치${hasBonusMessage} (${amount.toLocaleString()}원) - ${count}개`;
    },
    getProfitMessage(profit) {
      return `총 수익률은 ${profit}%입니다.`;
    },
  }),

  printLottoCount(count) {
    Console.print(OutputView.MESSAGE.getLottoCountMessage(count));
  },

  printLottoTicket(lottoTicket) {
    lottoTicket.getLottos().forEach((lotto) => Console.print(`[${lotto.getNumbers().join(', ')}]`));
    Console.print('');
  },

  printWinningStats(result) {
    Console.print(this.MESSAGE.winningStatsTitleMessage);
    result.getPrizes().forEach((value, key) => {
      if (Prize.NONE === key) {
        return;
      }

      Console.print(this.MESSAGE.getWinningStatsMessage(key, value));
    });
  },

  printProfit(profit) {
    Console.print(OutputView.MESSAGE.getProfitMessage(profit));
  },
};

module.exports = OutputView;
