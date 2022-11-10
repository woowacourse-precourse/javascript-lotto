const Lotto = require("./Lotto");

class App {
  constructor() {
    this.#lotto = new Lotto();
  }

  play() {}
}

module.exports = App;
