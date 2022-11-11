const LOTTO_PRICE = 1000;

class Validation {
  isDivided(purchaseAmount) {
    const change = purchaseAmount % LOTTO_PRICE;
    change === 0;
  }
}

module.exports = Validation;
