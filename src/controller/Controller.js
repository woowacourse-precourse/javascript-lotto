const LottoAmount = require('../domain/lotto/LottoAmount');
const LottoTicket = require('../domain/lotto/LottoTicket');
const InputView = require('../view/InputView');
const PrintView = require('../view/PrintView');

class Controller {
  #lottoAmount;

  #lottoTicket;

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
  }
}

module.exports = Controller;
