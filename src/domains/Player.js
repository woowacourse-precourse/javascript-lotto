const DataProcessor = require('./DataProcessor');
const DataChecker = require('./DataChecker');
const Tickets = require('./Tickets');

class Player {
  #data = {};

  constructor(purchaseAmount) {
    this.#purchaseLotto(purchaseAmount);
  }

  #purchaseLotto(purchaseAmount) {
    DataChecker.isValidRowDataOfPurchaseAmount(purchaseAmount);
    this.#data.purchaseAmount = DataProcessor.convertStringToNumber(purchaseAmount);
    DataChecker.isValidPurchaseAmount(this.#data.purchaseAmount);

    this.#getQuantityOfLotto(this.#data.purchaseAmount);
    this.#data.lottos = Tickets.publish(this.#data.quantity);
  }

  #getQuantityOfLotto() {
    this.#data.quantity = this.#data.purchaseAmount / 1000;
  }

  getPurchaseResult() {
    return {
      quantity: this.#data.quantity,
      lottos: DataProcessor.convertLottosToPrintableLottos(this.#data.lottos),
    };
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
