const DataProcessor = require('../domains/DataProcessor');
const Tickets = require('../domains/Tickets');

class Player {
  #data = {};

  purchaseLotto(purchaseAmount) {
    this.#data.quantity = DataProcessor.getQuantityOfLotto(
      DataProcessor.processRowDataOfPurchaseAmount(purchaseAmount)
    );
    this.#data.lottos = Tickets.publish(this.#data.quantity);
  }

  getLottos() {
    return this.#data.lottos;
  }

  getQuantityOfLotto() {
    return this.#data.quantity;
  }

  calculateProfit(result) {
    // 로또 당첨 금액 총합 * 수익률의 역 = purchaseAmount
    // 로또 당첨 금액 총합 / purchaseAmount = 수익률
  }
}

module.exports = Player;
