class App {
  #amount;

  #lottos;

  #winNumbers;

  #bonusNumber;

  #revenue;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
    this.#revenue = 0;
  }

  play() {}

  inputAmount() {}

  issueLottos() {}

  setAmount(amount) {
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  setWinNumbers(number) {
    this.#winNumbers = number;
  }

  getWinNumbers() {
    return this.#winNumbers;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setRevenue(revenue) {
    this.#revenue = revenue;
  }

  getRevenue() {
    return this.#revenue;
  }

  getRevenueRate() {
    const revenue = this.getRevenue();
    const amount = this.getAmount();
    if (revenue === 0) return (0).toFixed(1);

    const revenueRate = (revenue / amount) * 100;
    return revenueRate.toFixed(1);
  }
}

module.exports = App;
