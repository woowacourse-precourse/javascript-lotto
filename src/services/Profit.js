class Profit {
  static calculate({ result, purchaseAmount }) {
    return Profit.#addCommaToProfit(
      Profit.#addFirstDecimalToProfit(Profit.#calculateTotalAmount(result), purchaseAmount)
    );
  }

  static #calculateTotalAmount(result) {
    const prizeMoney = [2000000000, 30000000, 1500000, 50000, 5000];

    return Object.values(result).reduce((accumulator, currentValue, currentIndex) => {
      return accumulator + currentValue * prizeMoney[currentIndex];
    }, 0);
  }

  static #addFirstDecimalToProfit(totalAmount, purchaseAmount) {
    return parseFloat(Math.round((totalAmount / purchaseAmount) * 1000) / 10).toFixed(1);
  }

  static #addCommaToProfit(profit) {
    return profit.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
}

module.exports = Profit;
