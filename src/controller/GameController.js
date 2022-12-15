const BonusLotto = require('../model/BonusLotto');
const Lotto = require('../model/Lotto');
const Purchase = require('../model/Purchase');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #lotto;
  #bonusLotto;

  constructor() {
    this.#inputPurchaseAmount();
    this.#lotto = [];
    this.#bonusLotto = '';
  }

  #inputPurchaseAmount() {
    InputView.readLinePurchaseAmount((amount) => {
      const purchaseAmount = new Purchase(amount);
      const lottoTicktes = purchaseAmount.purchaseLotto();
      OutputView.printLottoTickets(lottoTicktes);
      this.#inputLottoNumber();
    });
  }

  #inputLottoNumber() {
    InputView.readLineLottoNumber((numbers) => {
      this.#lotto = new Lotto(numbers);
      this.#inputBonusLottoNumber();
    });
  }

  #inputBonusLottoNumber() {
    InputView.readLineLottoBonusNumber((number) => {
      this.#bonusLotto = new BonusLotto(number, this.#bonusLotto);
    });
  }
}

module.exports = { GameController };
