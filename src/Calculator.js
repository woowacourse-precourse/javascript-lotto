class Calculator {
  #pay;
  #income;

  constructor(pay) {
    this.validate(pay);
    this.#pay = pay;
  }

  validate(pay) {}

  calcBuyCount() {
    return Math.ceil(this.#pay / 1000);
  }
}

module.exports = Calculator;
