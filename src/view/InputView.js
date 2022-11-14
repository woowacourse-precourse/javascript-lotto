const { Console } = require("@woowacourse/mission-utils");
const { INPUT_MESSAGE, OUTPUT_MESSAGE } = require("../constants/message");
const LottoGameController = require("../LottoGameController");

class InputView {
  #lottoGameController;

  constructor() {
    this.#lottoGameController = new LottoGameController();
  }

  inputMoney() {
    Console.readLine(INPUT_MESSAGE.BUY, (money) => {
      const lottos = this.#lottoGameController.start(money);
      this.#showLottos(lottos);
    });
  }

  #showLottos(lottos) {
    Console.print(OUTPUT_MESSAGE.BUY(lottos.size()));
    Console.print(lottos.toString());
    this.#inputWinNumber();
  }

  #inputWinNumber() {
    Console.readLine(INPUT_MESSAGE.WIN_NUMBER, (numbers) => {
      console.log(numbers);
    });
  }
}

module.exports = InputView;
