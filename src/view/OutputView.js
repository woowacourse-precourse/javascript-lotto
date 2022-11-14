const { Console } = require("@woowacourse/mission-utils");
const { OUTPUT_MESSAGE } = require("../constants/message");

class OutputView {
  showLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.BUY(lottos.size()));
    Console.print(lottos.toString());
  }
}

module.exports = OutputView;
