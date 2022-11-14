const FIRST_PRIZE = 2000000000;
const SECOND_PRIZE = 30000000;
const THIRD_PRIZE = 1500000;
const FOURTH_PRIZE = 50000;
const FIFTH_PRIZE = 5000;

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
    const prizeMoney = [FIRST_PRIZE, SECOND_PRIZE, THIRD_PRIZE, FOURTH_PRIZE, FIFTH_PRIZE];

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
