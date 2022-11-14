const { Console } = require("@woowacourse/mission-utils");

class View {
  constructor() {
    this.printLottoCount = this.printLottoCount.bind(this);
    this.printQuickPick = this.printQuickPick.bind(this);
  }

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }

  printQuickPick(quickPick) {
    Console.print(this.serialize(quickPick));
  }
}

module.exports = View;