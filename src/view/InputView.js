const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE } = require("../constants/message");
const LottoGameController = require("../LottoGameController");

class InputView {
  #lottoGameController;

  constructor() {
    this.#lottoGameController = new LottoGameController();
  }

  inputMoney() {
    Console.readLine(INPUT_MESSAGE.BUY, (money) =>
      this.#lottoGameController.start(money)
    );
  }
}

module.exports = InputView;
