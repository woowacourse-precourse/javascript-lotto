const { Console } = require("@woowacourse/mission-utils");
const { QUERY, STATISTICS_MESSAGE } = require("../constants");

class View {
  constructor() {
    this.printLottoCount = this.printLottoCount.bind(this);
    this.printQuickPick = this.printQuickPick.bind(this);
  }

  readLine(query, callback) {
    Console.readLine(query, callback);
  }

  printLottoCount(lottoCount) {
    Console.print(`${lottoCount}개를 구매했습니다.`);
  }

  printQuickPick(quickPicks) {
    quickPicks.forEach(quickPick => {
      Console.print(`[${quickPick.join(', ')}]`);
    });
  }
}

module.exports = View;