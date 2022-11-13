const DataProcessor = require('../domains/DataProcessor');
const Tickets = require('../domains/Tickets');

class Player {
  #data = {};

  purchaseLotto(purchaseAmount) {
    this.#data.purchaseAmount = purchaseAmount;
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
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000, 0];

    const totalAmount = Object.values(result).reduce((accumulator, currentValue, currentIndex) => {
      return accumulator + currentValue * prizeMoney[currentIndex];
    }, 0);

    const profit = (totalAmount / this.#data.purchaseAmount) * 100;
    profit.toFixed(1);

    return profit;
  }
}

module.exports = Player;
