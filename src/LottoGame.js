const {MESSAGES, } = require('./Constants/Constants')
const Validation = require('./Validation');
class LottoGame {

  play();

  purchaseLotto() {
    Console.readLine(MESSAGES.ENTER_PURCHASE_AMOUNT, (amount) => {
      Validation.validatePurchaseAmount(amount);
    });
  }

}

module.exports = LottoGame;