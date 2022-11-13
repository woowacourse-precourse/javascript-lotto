const { LOTTO, CASHER } = require('../constants');
const Io = require('../infrastructure/io/io');
const InputValidator = require('../utils/InputValidator');

class Casher {
  static getMoney(message, afterGetMoney) {
    return Io.input(message, (money) => {
      InputValidator.validateMoney(money);
      const validMoney = Number(money);
      afterGetMoney(validMoney);
    });
  }

  static getPurchasableQuantity(purchaseAmount) {
    const quantity = purchaseAmount / LOTTO.TICKET_PRICE;
    return quantity;
  }

  static noticePurchaseQuantity(quantity) {
    return Io.output(`${quantity}${CASHER.NOTICE_PURCHASE_QUANTITY}`);
  }
}

module.exports = Casher;
