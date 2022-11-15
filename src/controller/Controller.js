const { Console } = require('@woowacourse/mission-utils');
const LottoAmount = require('../domain/lotto/LottoAmount');
const LottoTicket = require('../domain/lotto/LottoTicket');
const WinningLotto = require('../domain/lotto/WinningLotto');
const Result = require('../domain/result/Result');
const InputView = require('../view/InputView');
const PrintView = require('../view/PrintView');

class Controller {
  #lottoAmount;

  #lottoTicket;

  #winningLotto;

  static create() {
    return new Controller();
  }

  run() {
    InputView.inputLottoAmount(this.answerLottoAmount.bind(this));
  }

  answerLottoAmount(answer) {
    this.#lottoAmount = LottoAmount.from(answer);
    const lottoCount = this.#lottoAmount.getLottoCount();
    this.#lottoTicket = LottoTicket.of(lottoCount);

    PrintView.printLottoCount(lottoCount);
    PrintView.printLottoTicket(this.#lottoTicket);

    this.inputWinningLotto();
  }

  inputWinningLotto() {
    InputView.inputWinningLottoNumbers(this.answerWinningLottoNumbers.bind(this));
  }

  answerWinningLottoNumbers(winningNumbers) {
    InputView.inputBonusNumber(this.answerBonusNumber(winningNumbers).bind(this));
  }

  answerBonusNumber(winningNumbers) {
    return (answer) => {
      this.#winningLotto = WinningLotto.of(winningNumbers, answer);
      this.printResult();
    };
  }

  printResult() {
    const result = Result.from(this.#lottoTicket, this.#winningLotto);
    const profit = result.getProfit(this.#lottoAmount.getValue());

    PrintView.printWinningStats(result);
    PrintView.printProfit(profit);

    Controller.exit();
  }

  static exit() {
    Console.close();
  }
}

module.exports = Controller;
