const Lotto = require("./Lotto");

class App {
  play() {
    new Lotto().run();
  }
}

module.exports = App;
