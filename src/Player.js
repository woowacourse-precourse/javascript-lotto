const DataProcessor = require('./utils/DataProcessor');
const Tickets = require('./Tickets');
const GameOutput = require('./GameOutput');

class Player {
  #lotto = {
    quantity: 0,
    tickets: [],
  };

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
    GameOutput.printLottos(DataProcessor.convertLottosToPrintableLottos(this.#lotto.tickets));
    GameOutput.printNewLine();
  }
}

module.exports = Player;
