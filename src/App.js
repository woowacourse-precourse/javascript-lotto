const Lotto = require("./Lotto");

class App {
  play() {
    new Lotto().process();
  }
}

module.exports = App;
