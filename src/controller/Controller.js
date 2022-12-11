const { Console } = require('@woowacourse/mission-utils');
const { makeLottoTicket } = require('../domain/generator/LottoMaker');
const { generate } = require('../domain/generator/LottoRandomNumbersGenerator');
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
    this.#lottoAmount = new LottoAmount(answer);
    const lottoCount = this.#lottoAmount.getLottoCount();
    const lottos = makeLottoTicket(lottoCount, generate);
    this.#lottoTicket = new LottoTicket(lottos);

    OutputView.printLottoCount(lottoCount);
    OutputView.printLottoTicket(this.#lottoTicket.toString());

    this.inputWinningLotto();
  }

  inputWinningLotto() {
    InputView.readWinningLottoNumbers(this.answerWinningLottoNumbers.bind(this));
  }

  answerWinningLottoNumbers(winningNumbers) {
    OutputView.printBlank();
    InputView.readBonusNumber(this.answerBonusNumber(winningNumbers).bind(this));
  }

  answerBonusNumber(winningNumbers) {
    return (answer) => {
      this.#winningLotto = new WinningLotto(winningNumbers, answer);
      this.printResult();
    };
  }

  printResult() {
    const result = new Result(this.#lottoTicket, this.#winningLotto);
    const profit = result.getProfit(this.#lottoAmount.getValue());

    OutputView.printBlank();
    OutputView.printWinningStats(result.toStringPrizes());
    OutputView.printProfit(profit);

    Controller.exit();
  }

  static exit() {
    Console.close();
  }
}

module.exports = Controller;
