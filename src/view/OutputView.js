const { Console } = require('@woowacourse/mission-utils');
const Prize = require('../domain/result/Prize');

const OutputView = {
  message(type) {
    return {
      LOTTO_COUNT: '개를 구매했습니다.',
      WINNING_STATS_TITLE: '당첨 통계\n---',
      PROFIT_PREFIX: '총 수익률은',
      PROFIT_SUFFIX: '%입니다.',
    }[type] ?? '해당 없음';
  },

  getWinningStatsMessage({ amount, matchCount }, count) {
    const hasBonusMessage = amount === Prize.SECOND.amount ? ', 보너스 볼 일치' : '';
    return `${matchCount}개 일치${hasBonusMessage} (${amount.toLocaleString()}원) - ${count}개`;
  },

  printLottoCount(count) {
    Console.print(`${count}${this.message('LOTTO_COUNT')}`);
  },

  printLottoTicket(lottoTicket) {
    lottoTicket.getLottos().forEach((lotto) => Console.print(`[${lotto.getNumbers().join(', ')}]`));
    Console.print('');
  },

  printWinningStats(result) {
    Console.print(this.message('WINNING_STATS_TITLE'));
    result.getPrizes().forEach((count, prize) => {
      if (Prize.NONE === prize) {
        return;
      }

      Console.print(this.getWinningStatsMessage(prize, count));
    });
  },

  printProfit(profit) {
    Console.print(`${this.message('PROFIT_PREFIX')} ${profit}${this.message('PROFIT_SUFFIX')}`);
  },
};

module.exports = OutputView;
