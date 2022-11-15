const Details = require("./Details");
const { PRIZE, RANK_TO_ORDINAL, LOTTO_INFO, RESULT } = require("./Constants");
const { Console } = require("@woowacourse/mission-utils");

const Lotto = require("./Lotto");
const Bonus = require("./Bonus");

class Statistics {
  #details;
  #profitRate;

  constructor({ lottos, winning, bonus, amount }) {
    this.#details = new Details(lottos, winning, bonus);
    this.#profitRate = this.getProfitRate(amount);
  }

  getWinningDetails() {
    return this.#details.getDetails();
  }

  getProfitRate(amount) {
    let profit = 0;
    let winningDetails = this.getWinningDetails();
    Object.keys(winningDetails).forEach((rank) => {
      let ordinal = RANK_TO_ORDINAL[rank];
      profit += PRIZE[ordinal] * winningDetails[rank];
    });

    return ((profit / (amount * LOTTO_INFO.price)) * 100).toFixed(1);
  }

  print() {
    Console.print(RESULT.title);
    this.#details.print();
    this.printProfitRate();
  }

  printProfitRate() {
    Console.print(RESULT.profit_rate(this.#profitRate));
  }
}

module.exports = Statistics;

// const lottos = [
//   new Lotto([1, 23, 4, 10, 11, 12]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
//   new Lotto([10, 11, 12, 13, 14, 15]),
// ];
// const winner = new Lotto([1, 23, 4, 5, 6, 7]);
// const bonus = new Bonus(2, winner);
// const result = new Statistics({
//   lottos: lottos,
//   winning: winner,
//   bonus: bonus,
//   amount: 8,
// });

// result.print();
