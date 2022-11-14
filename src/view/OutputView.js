const { Console } = require("@woowacourse/mission-utils");
const { LOTT0_MESSAGE } = require("./../utils/Constant");

class OutputView {
  showLottos(lottos) {
    Console.print(`${lottos.size()}개를 구매했습니다.`);
    Console.print(lottos.toString());
  }
}

module.exports = OutputView;
