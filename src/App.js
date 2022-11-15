const Store = require("./Store");

class App {
  play() {
    const store = new Store();
    store.buy();
  }
}

module.exports = App;
