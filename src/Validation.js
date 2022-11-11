const LOTTO_PRICE = 1000;

class Validation {
  static isDivided(purchaseAmount) {
    const change = purchaseAmount % LOTTO_PRICE;
    return change === 0;
  }
}

module.exports = Validation;
