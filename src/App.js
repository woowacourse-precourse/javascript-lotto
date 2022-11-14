const Clerk = require("./play/Clerk");

class App {
  play() {
    const clerk = new Clerk();
    clerk.inputLottoAmount();
  }
}

module.exports = App;
