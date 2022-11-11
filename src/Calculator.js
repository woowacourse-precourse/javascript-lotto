class Calculator {
  #pay;
  #totalPrize;
  #prizeMap;

  constructor(pay) {
    this.validate(pay);
    this.#pay = pay;
    this.#totalPrize = 0;
    this.#prizeMap = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
  }

  validate(pay) {}

  calcBuyCount() {
    return Math.ceil(this.#pay / 1000);
  }

  addPrize(ranking) {
    this.#totalPrize += this.#prizeMap[ranking];
  }

  calcProfitRate() {
    return ((this.#totalPrize / this.#pay) * 100).toFixed(1);
  }
}

module.exports = Calculator;
