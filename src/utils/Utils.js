const { Console, Random } = require("@woowacourse/mission-utils");
const { INDEX } = require("./constants");

class Utils {
  static separateByComma(numbers) {
    return numbers.split(",").map((number) => Number(number));
  }

  static getRandomeNumbers(startInclusive, endInclusive, count) {
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
    this.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => this.#printLottoNumber(lotto));
  }

  static #printRank(rankCount) {
    this.print(`3개 일치 (5,000원) - ${rankCount[INDEX.FIFTH_RANK]}개`);
    this.print(`4개 일치 (50,000원) - ${rankCount[INDEX.FORTH_RANK]}개`);
    this.print(`5개 일치 (1,500,000원) - ${rankCount[INDEX.THIRD_RANK]}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCount[INDEX.SECOND_RANK]}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${rankCount[INDEX.FIRST_RANK]}개`);
  }

  static #printRateOfReturn(rateOfReturn) {
    this.print(`총 수익률은 ${rateOfReturn.toLocaleString()}%입니다.`);
  }

  static printWinningResult(rankCount, rateOfReturn) {
    this.print("\n당첨 통계\n---");
    this.#printRank(rankCount);
    this.#printRateOfReturn(rateOfReturn);
  }
}

module.exports = Utils;
