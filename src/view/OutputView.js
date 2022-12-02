const { Console } = require('@woowacourse/mission-utils');

const OutputView = {
  message(type) {
    return {
      BLANK: '',
      LOTTO_COUNT: '개를 구매했습니다.',
      WINNING_STATS_TITLE: '당첨 통계\n---',
      PROFIT_PREFIX: '총 수익률은',
      PROFIT_SUFFIX: '%입니다.',
    }[type] ?? '해당 없음';
  },

  printBlank() {
    Console.print(this.message('BLANK'));
  },

  printLottoCount(count) {
    Console.print(`${count}${this.message('LOTTO_COUNT')}`);
  },

  printLottoTicket(lottoTicket) {
    Console.print(lottoTicket);
  },

  printWinningStats(winningStats) {
    Console.print(this.message('WINNING_STATS_TITLE'));
    Console.print(winningStats);
  },

  printProfit(profit) {
    Console.print(`${this.message('PROFIT_PREFIX')} ${profit}${this.message('PROFIT_SUFFIX')}`);
  },
};

module.exports = OutputView;
