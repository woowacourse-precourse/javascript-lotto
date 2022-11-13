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
    const totalAmount = Object.values(result).reduce(this.#calculateTotalAmount, 0);
    const profit = this.#convertIntegerToFloatWithFirstDecimalPlace(totalAmount);

    return this.#convertProfitToProfitWithComma(profit);
  }

  #calculateTotalAmount(accumulator, currentValue, currentIndex) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    return accumulator + currentValue * prizeMoney[currentIndex];
  }

  #convertIntegerToFloatWithFirstDecimalPlace(totalAmount) {
    return parseFloat(Math.round((totalAmount / this.#data.purchaseAmount) * 1000) / 10).toFixed(1);
  }

  #convertProfitToProfitWithComma(profit) {
    return profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = Player;
