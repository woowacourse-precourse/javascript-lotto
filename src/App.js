const Seller = require("./Seller");

class App {
  play() {
    new Seller().saleLotto();
  }
}

module.exports = App;
