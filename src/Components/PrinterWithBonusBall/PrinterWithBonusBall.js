const AbstractPrinter = require('../AbstractPrinter/AbstractPrinter');

class PrinterWithBonusBall extends AbstractPrinter {
  print() {
    return `${this.matchedNumberCount}개 일치, 보너스 볼 일치 (${this.winningMoney}원) - ${this.matchedLottoCount}개`;
  }
}

module.exports = PrinterWithBonusBall;
