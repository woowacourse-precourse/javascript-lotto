const { Random } = require("@woowacourse/mission-utils");
const Console = require("./Console");
const { LOTTO_RESULT } = require("./constants");

class LottoAdmin {
  static generateLottoAnswer(lottoNum) {
    return Array.from({ length: lottoNum }, () => this.#generateLotto());
  }

  static #generateLotto() {
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }

  static getSameNumWithInputLotto(lotto, winNumbers) {
    console.log(lotto, winNumbers);
    return lotto.filter((num) => winNumbers.includes(num)).length;
  }

  static #getStatisticsStrArr(statistics) {
    const ment = Object.values(LOTTO_RESULT);
    return statistics.map((value, idx) => ment[idx] + value + "개").join("\n");
  }

  static printWinStatistics(statistics) {
    Console.print(this.#getStatisticsStrArr(statistics));
  }

  static #getStatisticsPriceSum(price, ranks) {
    return ranks.reduce((acc, value, idx) => acc + value * price[idx], 0);
  }

  static #priceToString(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  static getMargin(price, [lottoLen, ranks]) {
    const margin = this.#getStatisticsPriceSum(price, ranks);
    const totalLottoPrice = lottoLen * 1000;
    const middle = (margin / totalLottoPrice) * 100;
    return this.#priceToString(middle.toFixed(1));
  }
}

module.exports = LottoAdmin;
