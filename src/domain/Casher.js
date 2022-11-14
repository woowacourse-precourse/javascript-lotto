const { LOTTO, CASHER } = require('../constants');
const Io = require('../infrastructure/io/io');
const InputValidator = require('../utils/InputValidator');

class Casher {
  static #purchaseMoney = 0;

  static getMoney(message, afterGetMoney) {
    return Io.input(message, (money) => {
      validateMoney(money);
      Casher.#purchaseMoney = Number(money);
      afterGetMoney(Casher.#purchaseMoney);
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
