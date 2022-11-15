const Details = require("./Details");
const { PRIZE, RANK_TO_ORDINAL, LOTTO_INFO, RESULT } = require("../Constants");
const { Console } = require("@woowacourse/mission-utils");

class Statistics {
  #details;
  #profitRate;

  constructor({ lottos, winningNumbers, bonusNumbers, amount }) {
    this.#details = new Details({ lottos, winningNumbers, bonusNumbers });
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

    return ((profit / (amount * LOTTO_INFO.price)) * 100).toLocaleString(
      undefined,
      { minimumFractionDigits: 1 }
    );
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
