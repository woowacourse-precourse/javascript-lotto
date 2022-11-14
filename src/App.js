class App {
  #amount;

  #lottos;

  #winNumbers;

  #bonusNumber;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
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
}

module.exports = App;
