const { Console } = require("@woowacourse/mission-utils");

class Utils {
  print(output) {
    Console.print(output);
  }

  readLine(message, callback) {
    Console.readLine(message, callback);
  }

  printLottoNumber(lotto) {
    const sortedNumbers = lotto.numbers.sort((a, b) => a - b);
    const output = "[" + sortedNumbers.join(", ") + "]";
    this.print(output);
  }

  printPurchasedLotto(lottos) {
    this.print(`\n${lottos.length}개를 구매했습니다.`);
    lottos.forEach((lotto) => this.printLottoNumber(lotto));
  }

  printRateOfReturn(rateOfReturn) {
    this.print(`총 수익률은 ${rateOfReturn}%입니다.`);
  }

  printRank(rankCount) {
    this.print(`3개 일치 (5,000원) - ${rankCount[4]}개`);
    this.print(`4개 일치 (50,000원) - ${rankCount[3]}개`);
    this.print(`5개 일치 (1,500,000원) - ${rankCount[2]}개`);
    this.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rankCount[1]}개`);
    this.print(`6개 일치 (2,000,000,000원) - ${rankCount[0]}개`);
  }

  printWinningResult(rankCount, rateOfReturn) {
    this.print("\n당첨 통계\n---");
    this.printRank(rankCount);
    this.printRateOfReturn(rateOfReturn);
  }
}

module.exports = Utils;
