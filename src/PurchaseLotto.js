
class PurchaseLotto {
  #purchasedCount;

  constructor(money) {
    this.#purchasedCount = money / 1000;
  }

}

module.exports = PurchaseLotto;
