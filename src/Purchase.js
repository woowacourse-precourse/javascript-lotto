const { ERROR, LOTTO, REGEXP } = require('./constant');

class Purchase {
  #amount;

  constructor(amount) {
    this.validatePurchaseAmount(amount);
    this.#amount = amount;
  }

  validatePurchaseAmount(amount) {
    const isNumber = REGEXP.number.test(amount);
    if (!isNumber) throw new Error(ERROR.purchaseAmount);

    const isZero = amount === 0;
    if (isZero) throw new Error(ERROR.purchaseAmount);

    const isDivisableByPrice = amount % LOTTO.price === 0;
    if (!isDivisableByPrice) throw new Error(ERROR.purchaseAmount);
  }

  count() {
    return this.#amount / LOTTO.price;
  }
}

module.exports = Purchase;
