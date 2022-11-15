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
    const printLottos = lottos.split("\n");
    printLottos.forEach((lotto) => {
      Console.print(lotto.toString());
    });
    this.inputWinNumber();
  }

  inputWinNumber() {
    Console.readLine(INPUT_MESSAGE.WIN_NUMBER, (numbers) => {
      this.#lottoGameController.inputWinNumber(numbers);
      this.#inputBonus();
    });
  }

  #inputBonus() {
    Console.readLine(INPUT_MESSAGE.BONUS_NUMBER, (numbers) => {
      this.#lottoGameController.inputBonus(numbers);
      this.#showStatics();
    });
  }

  #showStatics() {
    Console.print(OUTPUT_MESSAGE.START_STATICS);
    const statics = this.#lottoGameController.outputStatics();
    Console.print(statics);
    this.#showIncomeRate();
  }

  #showIncomeRate() {
    const incomeRate = this.#lottoGameController.outputIncomeRate();
    Console.print(OUTPUT_MESSAGE.TOTAL_INCOME(incomeRate));
    Console.close();
  }
}

module.exports = InputView;
