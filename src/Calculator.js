class Calculator {
  #pay;
  #prizeMap;
  #totalPrize;

  constructor(pay) {
    this.validate(pay);
    this.#pay = pay;
    this.#prizeMap = {
      1: 2000000000,
      2: 30000000,
      3: 1500000,
      4: 50000,
      5: 5000,
    };
    this.#totalPrize = 0;
  }

  validate(pay) {}

  calcBuyCount() {
    return Math.ceil(this.#pay / 1000);
  }

  addPrize(ranking) {
    this.#totalPrize += this.#prizeMap[ranking];
  }
}

module.exports = Calculator;
