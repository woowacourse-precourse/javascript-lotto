class BuyLotto {
  #price;

  constructor(price) {
    this.lostPrice(price);
    this.#price = price;
  }

  nTimes() {
    return this.#price / 1000;
  }
  lostPrice(price) {
    if (price % 1000 !== 0) {
      throw new Error("[ERROR] 나누어 떨어지지 않는 금액입니다.");
    }
  }
}
module.exports = BuyLotto;
