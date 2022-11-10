const Prize = require('../domain/result/Prize');

class PrintView {
  static #MESSAGE = Object.freeze({
    getLottoCountMessage(lottoCount) {
      return `${lottoCount}개를 구매했습니다`;
    },
    winningStatsTitleMessage: '당첨 통계\n---\n',
    getWinningStatsMessage(prize, count) {
      const { amount, matchCount } = prize;
      const hasBonusMessage = prize === Prize.SECOND ? '보너스 볼 일치' : '';
      return `${matchCount}개 일치${hasBonusMessage} (${amount}원) - ${count}개`;
    },
    getProfitMessage(profit) {
      return `총 수익률은 ${profit}%입니다.`;
    },
  });

  static printLottoCount() {

  }

  static printLottoNumbers() {

  }

  static printWinningStats() {

  }

  static printProfit() {

  }
}

module.exports = PrintView;
