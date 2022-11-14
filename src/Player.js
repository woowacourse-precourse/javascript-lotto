const DataProcessor = require('./domains/DataProcessor');
const Tickets = require('./services/Tickets');
const GameOutput = require('./views/GameOutput');

class Player {
  #lotto = {};

  buyLotto(purchaseAmount) {
    this.#lotto.quantity = DataProcessor.getQuantityOfLotto(
      DataProcessor.processRowDataOfPurchaseAmount(purchaseAmount)
    );
  }

  getLotto() {
    this.#lotto.tickets = Tickets.publish(this.#lotto.quantity);
  }

  printLotto() {
    GameOutput.printNewLine();
    GameOutput.printQuantityOfLotto(this.#lotto.quantity);
    GameOutput.printLottos(this.#convertLottosToPrintableLottos());
    GameOutput.printNewLine();
  }

  #convertLottosToPrintableLottos() {
    return this.#lotto.tickets.map(ticket => this.#createPrintableTicket(ticket)).join('\n');
  }

  #createPrintableTicket(ticket) {
    return `[${ticket.join(', ')}]`;
  }
}

module.exports = Player;
