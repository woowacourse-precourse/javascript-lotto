const PRIZE = require('../utils/prize');

class ProfitCalculator {
  static calculate({ result, purchaseAmount }) {
    const totalAmount = ProfitCalculator.#calculateTotalAmount(result);
    const profit = ProfitCalculator.#addFirstDecimalToProfit(totalAmount, purchaseAmount);

    return ProfitCalculator.#addCommaToProfit(profit);
  }

  static #calculateTotalAmount(result) {
    return Object.values(result).reduce(ProfitCalculator.#adder, 0);
  }

  static #adder(accumulator, currentValue, currentIndex) {
    const prizeMoney = [PRIZE.first, PRIZE.second, PRIZE.third, PRIZE.fourth, PRIZE.fifth];

    return accumulator + currentValue * prizeMoney[currentIndex];
  }

  static #addFirstDecimalToProfit(totalAmount, purchaseAmount) {
    return parseFloat(Math.round((totalAmount / purchaseAmount) * 1000) / 10).toFixed(1);
  }

  static #addCommaToProfit(profit) {
    return profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = ProfitCalculator;
