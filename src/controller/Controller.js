const { Console } = require('@woowacourse/mission-utils');
const LottoAmount = require('../domain/lotto/LottoAmount');
const LottoTicket = require('../domain/lotto/LottoTicket');
const WinningLotto = require('../domain/lotto/WinningLotto');
const Result = require('../domain/result/Result');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class Controller {
  #lottoAmount;

  #lottoTicket;

  #winningLotto;

  static create() {
    return new Controller();
  }

  run() {
    InputView.readLottoAmount(this.answerLottoAmount.bind(this));
  }

  answerLottoAmount(answer) {
    this.#lottoAmount = LottoAmount.from(answer);
    const lottoCount = this.#lottoAmount.getLottoCount();
    this.#lottoTicket = LottoTicket.of(lottoCount);

    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoTicket(this.#lottoTicket);

    this.inputWinningLotto();
  }

  inputWinningLotto() {
    InputView.readWinningLottoNumbers(this.answerWinningLottoNumbers.bind(this));
  }

  answerWinningLottoNumbers(winningNumbers) {
    InputView.readBonusNumber(this.answerBonusNumber(winningNumbers).bind(this));
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

    OutputView.printWinningStats(result);
    OutputView.printProfit(profit);

    Controller.exit();
  }

  static exit() {
    Console.close();
  }
}

module.exports = Controller;
