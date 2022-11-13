const { Console, Random } = require("@woowacourse/mission-utils");

class Utils {
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
    this.print(`3개 일치 (5,000원) - ${rankCount[4]}개`);
    this.print(`4개 일치 (50,000원) - ${rankCount[3]}개`);
    this.print(`5개 일치 (1,500,000원) - ${rankCount[2]}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCount[1]}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${rankCount[0]}개`);
  }

  static #printRateOfReturn(rateOfReturn) {
    this.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  static printWinningResult(rankCount, rateOfReturn) {
    this.print("\n당첨 통계\n---");
    this.#printRank(rankCount);
    this.#printRateOfReturn(rateOfReturn);
  }
}

module.exports = Utils;
