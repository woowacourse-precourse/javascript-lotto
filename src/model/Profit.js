class Profit {
  #winnings;
  #amount;

  constructor(winnings, amount) {
    this.#winnings = winnings;
    this.#amount = amount;
  }

  formateProfitRate() {
    const round = this.#calculateProfitRate().toFixed(1);
    return round.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  #calculateProfitRate() {
    return this.#calculateTotalPrice() % Number(this.#amount);
  }

  #calculateTotalPrice() {
    const key = Object.keys(this.#winnings);
    return key.reduce(
      (totalPrice, index) =>
        this.#winnings[index].JACKPOT * this.#winnings[index].total + totalPrice,
      0
    );
  }
}

module.exports = Profit;
