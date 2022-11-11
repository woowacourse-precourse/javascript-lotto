const { Console } = require("@woowacourse/mission-utils");

const AbstractPrinter = require("../AbstractPrinter/AbstractPrinter");

class Printer extends AbstractPrinter {
  print() {
    Console.print(
      `${this.matchedNumberCount}개 일치 (${this.winningMoney}원) - ${this.matchedLottoCount}개`
    );
  }
}

module.exports = Printer;
