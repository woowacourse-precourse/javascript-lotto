class BuyLotto {
  #price;

  constructor(price) {
    this.#price = price;
  }

  nTimes(price) {
    return price / 1000;
  }
}
module.exports = BuyLotto;
