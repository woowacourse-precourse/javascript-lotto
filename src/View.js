const { Console } = require("@woowacourse/mission-utils");

class View {
  printPurchased(num, lottos) {
    console.log("\n");

    Console.print(`${num}개를 구매했습니다.`);
    lottos.forEach((lotto) => {
      const sorted = lotto.sort((a, b) => a - b);
      Console.print(this.stringifyArray(sorted));
    });

    console.log("\n");
  }

  stringifyArray(array) {
    let stringify = "[";
    array.forEach((item, index) => {
      if (index === array.length - 1) {
        stringify += item;
        return;
      }
      stringify += item + ", ";
    });
    stringify += "]";
    return stringify;
  }

  printStatistics(rank, percent) {
    console.log("당첨 통계");
    console.log("---");
    Console.print(`3개 일치 (5,000원) - ${rank.fifth}개`);
    Console.print(`4개 일치 (50,000원) - ${rank.fourth}개`);
    Console.print(`5개 일치 (1,500,000원) - ${rank.third}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${rank.second}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${rank.first}개`);
    Console.print(`총 수익률은 ${percent.toLocaleString()}%입니다.`);
  }
}

module.exports = View;
