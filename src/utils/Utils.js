const { Console, Random } = require("@woowacourse/mission-utils");
const { INDEX } = require("./constants");
const { MESSAGE } = require("./messages");

class Utils {
  static separateByComma(numbers) {
    return numbers.split(",").map((number) => Number(number));
  }

  static getRandomNumbers(startInclusive, endInclusive, count) {
    return Random.pickUniqueNumbersInRange(startInclusive, endInclusive, count);
  }

  static print(output) {
    Console.print(output);
  }

  static readLine(message, callback) {
    Console.readLine(message, callback);
  }

  static close() {
    Console.close();
  }

  static #printLottoNumber(lotto) {
    const sortedNumbers = lotto.numbers.sort((a, b) => a - b);
    const output = "[" + sortedNumbers.join(", ") + "]";
    this.print(output);
  }

  static printPurchasedLotto(lottos) {
    this.print(`\n${MESSAGE.PURCHASE_LOTTO(lottos.length)}`);
    lottos.forEach((lotto) => this.#printLottoNumber(lotto));
  }

  static #printRank(rankCount) {
    this.print(MESSAGE.MATCH_RESULT.FIFTH_RANK(rankCount[INDEX.FIFTH_RANK]));
    this.print(MESSAGE.MATCH_RESULT.FORTH_RANK(rankCount[INDEX.FORTH_RANK]));
    this.print(MESSAGE.MATCH_RESULT.THIRD_RANK(rankCount[INDEX.THIRD_RANK]));
    this.print(MESSAGE.MATCH_RESULT.SECOND_RANK(rankCount[INDEX.SECOND_RANK]));
    this.print(MESSAGE.MATCH_RESULT.FIRST_RANK(rankCount[INDEX.FIRST_RANK]));
  }

  static #printRateOfReturn(rateOfReturn) {
    this.print(MESSAGE.RATE_OF_RETURN(rateOfReturn));
  }

  static printWinningResult(rankCount, rateOfReturn) {
    this.print(`\n${MESSAGE.WINNING_STATS}\n${MESSAGE.DIVIDE_LINE}`);
    this.#printRank(rankCount);
    this.#printRateOfReturn(rateOfReturn);
  }
}

module.exports = Utils;
