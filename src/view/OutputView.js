const { UTIL } = require('../constant/Libs');
const { PRINT_MESSAGE } = require('../constant/Message');
const { Console } = require(UTIL);

const OutputView = {
  printLottoTickets(lottoTickets) {
    Console.print(PRINT_MESSAGE.TOTAL_LOTTO_TICKETS(lottoTickets.length));
    lottoTickets.forEach((lotto) => Console.print(PRINT_MESSAGE.LOTTO_TICKET(lotto)));
  },
};

module.exports = OutputView;
