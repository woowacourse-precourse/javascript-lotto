const { UTIL } = require('../constant/Libs');
const { PRINT_MESSAGE } = require('../constant/Message');
const { RANKING } = require('../constant/Winnings');
const { Console } = require(UTIL);

const OutputView = {
  print(message) {
    Console.print(message);
  },

  printLottoTickets(lottoTickets) {
    this.print(PRINT_MESSAGE.TOTAL_LOTTO_TICKETS(lottoTickets.length));
    lottoTickets.forEach((lotto) => this.print(PRINT_MESSAGE.LOTTO_TICKET(lotto)));
  },

  printWinningLotto(winnings) {
    this.print(PRINT_MESSAGE.LOTTO_WINNING);
    this.print(PRINT_MESSAGE.LOTTO_WINNING_START_DIVISION);
    RANKING.forEach((rank) => this.print(rank.MESSAGE(winnings[rank.LOCATE].total)));
  },

  printProfitLotto(profit) {
    this.print(PRINT_MESSAGE.LOTTO_PROFIT(profit));
    Console.close();
  },
};

module.exports = OutputView;
