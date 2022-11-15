const { Console } = require('@woowacourse/mission-utils');
const { MESSAGE } = require('./utils/constants');
const LottoStore = require('./LottoStore');
const LottoGame = require('./LottoGame');
const User = require('./User');

class App {
  #lottoGame;

  #user;

  constructor() {
    this.#lottoGame = new LottoGame();
    this.#user = new User(this.#lottoGame);
  }

  play() {
    this.#askPurchaseAmount();
  }

  #askPurchaseAmount() {
    Console.readLine(`${MESSAGE.PURCHASE_QUESTION}\n`, answer =>
      this.#handlePurchasingLotto(answer),
    );
  }

  #handlePurchasingLotto(answer) {
    const purchasedTickets = LottoStore.sellLottoTickets(answer);
    this.#printPurchasedTicket(purchasedTickets);

    this.#user.setLottoTickets(purchasedTickets);

    this.#askWinningNumbers();
  }

  #printPurchasedTicket(tickets) {
    Console.print(`\n${tickets.length}${MESSAGE.PURCHASE_RESULT}`);
    tickets.forEach(ticket => Console.print(ticket.toString()));
  }

  #askWinningNumbers() {
    Console.readLine(`\n${MESSAGE.WINNING_QUESTION}\n`, answer =>
      this.#handleWinnigNumbers(answer),
    );
  }

  #handleWinnigNumbers(answer) {
    this.#lottoGame.setWinningNumbers(answer);

    this.#askBonusNumber();
  }

  #askBonusNumber() {
    Console.readLine(`\n${MESSAGE.BONUS_QUESTION}\n`, answer => {
      this.#handleBonusNumber(answer);
    });
  }

  #handleBonusNumber(answer) {
    this.#lottoGame.setBonusNumber(answer);

    this.#printWinningStatistics();
  }

  #printWinningStatistics() {
    const statistics = this.#user.createStatisticsText();

    Console.print(`\n${MESSAGE.WINNING_STATISTICS}`);
    Console.print('---');
    statistics.forEach(text => Console.print(text));

    Console.close();
  }
}

module.exports = App;
