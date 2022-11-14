const PlayerDataChecker = require('../services/PlayerPurchaseAmountChecker');
const Tickets = require('../services/Tickets');

class Player {
  #data = {};

  constructor(purchaseAmount) {
    this.#purchaseLotto(purchaseAmount);
  }

  #purchaseLotto(purchaseAmount) {
    PlayerDataChecker.checkRowDataOfPurchaseAmount(purchaseAmount);
    this.#data.purchaseAmount = parseInt(purchaseAmount, 10);
    PlayerDataChecker.checkPurchaseAmount(this.#data.purchaseAmount);
    this.#calculateQuantityOfLotto(this.#data.purchaseAmount);
    this.#data.lottos = Tickets.publish(this.#data.quantity);
  }

  #calculateQuantityOfLotto() {
    this.#data.quantity = this.#data.purchaseAmount / 1000;
  }

  getPurchaseAmount() {
    return this.#data.purchaseAmount;
  }

  getLottos() {
    return this.#data.lottos;
  }

  getQuantityOfLotto() {
    return this.#data.quantity;
  }

  getPurchaseResult() {
    return {
      quantity: this.#data.quantity,
      lottos: this.#convertLottosToPrintableLottos(),
    };
  }

  #convertLottosToPrintableLottos() {
    return this.#data.lottos.map(ticket => this.#createPrintableTicket(ticket)).join('\n');
  }

  #createPrintableTicket(ticket) {
    return `[${ticket.join(', ')}]`;
  }
}

module.exports = Player;
