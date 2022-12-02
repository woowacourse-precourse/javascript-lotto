const InputView = require('./View/InputView');

class App {
  play() {
    InputView.readPurchase();
  }
}

module.exports = App;
