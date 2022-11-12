const DataProcessor = require('../domains/DataProcessor');
const Tickets = require('../domains/Tickets');
const GameOutput = require('../views/GameOutput');

class Player {
  #lotto = {};

  purchaseLotto(purchaseAmount) {
    this.#lotto.quantity = DataProcessor.getQuantityOfLotto(
      DataProcessor.processRowDataOfPurchaseAmount(purchaseAmount)
    );
    this.#lotto.tickets = Tickets.publish(this.#lotto.quantity);
  }

  printLotto() {
    GameOutput.printNewLine();
    GameOutput.printQuantityOfLotto(this.#lotto.quantity);
    GameOutput.printLottos(DataProcessor.convertLottosToPrintableLottos(this.#lotto.tickets));
  }
}

module.exports = Player;
