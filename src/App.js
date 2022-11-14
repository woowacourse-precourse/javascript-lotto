const Application = require('./Application');

class App {
  static purchaseCount(userInputNumber) {
    const UNIT_AMOUNT = 1000;

    return Application.purchaseCount(userInputNumber, UNIT_AMOUNT);
  }
}

module.exports = App;
