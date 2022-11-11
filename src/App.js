class App {
  #amount;

  #lottos;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
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
}

module.exports = App;
