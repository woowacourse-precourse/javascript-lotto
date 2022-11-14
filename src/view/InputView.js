const { Console } = require("@woowacourse/mission-utils");
const { LOTT0_MESSAGE } = require("../utils/Constant");
const LottoGameController = require("../LottoGameController");

class InputView {
  #lottoGameController;

  constructor() {
    this.#lottoGameController = new LottoGameController();
  }

  inputMoney() {
    Console.readLine(LOTT0_MESSAGE.START, (money) =>
      this.#lottoGameController.start(money)
    );
  }
}

module.exports = InputView;
