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
      this.#printLottosSize();
    });
  }

  #printLottosSize() {
    const size = this.#lottoGameController.outputLottoSize();
    Console.print(OUTPUT_MESSAGE.BUY(size));
    this.#printLottos();
  }

  #printLottos() {
    const lottos = this.#lottoGameController.outputLottos();
    Console.print(lottos.toString());
    this.#inputWinNumber();
  }

  #inputWinNumber() {
    Console.readLine(INPUT_MESSAGE.WIN_NUMBER, (numbers) => {
      this.#lottoGameController.inputWinNumber(numbers);
      this.#inputBonus();
    });
  }
}

module.exports = InputView;
