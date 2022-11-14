const Application = require('./Application');
const Lotto = require('./Lotto');

class App {
  static purchaseCount(userInputNumber) {
    const UNIT_AMOUNT = 1000;

    return Application.purchaseCount(userInputNumber, UNIT_AMOUNT);
  }

  static buyLotto(userInputNumber) {
    return Lotto.buyLotto(userInputNumber);
  }

  static convertToNumberArray(target = '') {
    const SPLITTER = ',';

    return target.split(SPLITTER).map(Application.convertNumber.bind(Application));
  }
}

module.exports = App;
