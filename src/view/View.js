const { Console } = require("@woowacourse/mission-utils");

class View {
  constructor() {
    this.printLottoCount = this.printLottoCount.bind(this);
  }

  printLottoCount(lottoCount) {
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
  }
}

module.exports = View;