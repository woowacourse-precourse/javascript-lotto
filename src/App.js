const Seller = require("./Seller");

class App {
  #seller;
  constructor() {
    this.#seller = new Seller();
  }
  play() {
    this.#seller.saleLotto();
  }
}

module.exports = App;
