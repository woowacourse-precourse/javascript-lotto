const { FORMULA } = require("./constants");

class User {
  #myLottos = [];
  #payAmount = 0;
  #profit = 0;

  getMyLottos() {
    return this.#myLottos;
  }

  setMyLottos(lottos) {
    this.#myLottos = lottos;
  }

  getPayAmount() {
    return this.#payAmount;
  }

  setPayAmount(input) {
    this.#payAmount = input;
  }

  getProfit() {
    return this.#profit;
  }

  calculate(winningMap) {
    let revenue = 0
    for (let [_, pair] of Object.entries(winningMap)) {
      revenue += pair.count * pair.WINNING_AMOUNT;
    }

    this.#profit = FORMULA.PROFIT(revenue, this.#payAmount);

    return this;
  }

}

module.exports = User;