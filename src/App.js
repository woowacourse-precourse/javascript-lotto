const TicketPublisher = require('./domain/TicketPublisher');
const Casher = require('./domain/Casher');
const { CASHER } = require('./constants');
const LottoPicker = require('./domain/LottoPicker');
const RankDeterminator = require('./domain/RankDeterminator');
class App {
  tickets;
  static rankDeterminator;

  constructor() {
    this.tickets = [];
  }

  play() {
    Casher.getMoney(CASHER.ASK_MONEY, (input) => {
      this.purchaseRoutine(input);
      LottoPicker.pickLottoNumbers(this.markRoutine.bind(this));
    });
  }

  purchaseRoutine(purchaseAmount) {
    const ticketQuantity = Casher.getPurchasableQuantity(purchaseAmount);
    Casher.noticePurchasedQuantity(ticketQuantity);
    this.tickets = TicketPublisher.publishTickets(ticketQuantity);
    TicketPublisher.showTickets(this.tickets);
  }

  markRoutine({ winningNumbers, bonusNumber }) {
    App.rankDeterminator = new RankDeterminator({ winningNumbers, bonusNumber });
    const ranks = this.tickets.map((ticket) => ticket.getRank(App.rankDeterminator));
    Casher.setResults(ranks);
    Casher.noticeResult();
    Casher.noticeProfit();
  }
}

module.exports = App;
