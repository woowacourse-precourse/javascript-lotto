const BonusLotto = require('../model/BonusLotto');
const Lotto = require('../model/Lotto');
const Profit = require('../model/Profit');
const Purchase = require('../model/Purchase');
const Statistics = require('../model/Statistics');
const InputView = require('../view/InputView');
const OutputView = require('../view/OutputView');

class GameController {
  #lotto;
  #bonusLotto;
  #lottoTickets;
  #amount;

  constructor() {
    this.#inputPurchaseAmount();
    this.#lotto = [];
    this.#bonusLotto = '';
    this.#lottoTickets = [];
    this.#amount = 0;
  }

  #inputPurchaseAmount() {
    InputView.readLinePurchaseAmount((amount) => {
      const purchaseAmount = new Purchase(amount);
      this.#amount = amount;
      this.#lottoTickets = purchaseAmount.purchaseLotto();
      OutputView.printLottoTickets(this.#lottoTickets);
      this.#inputLottoNumber();
    });
  }

  #inputLottoNumber() {
    InputView.readLineLottoNumber((numbers) => {
      this.#lotto = new Lotto(numbers).makeLottoNumber();
      this.#inputBonusLottoNumber();
    });
  }

  #inputBonusLottoNumber() {
    InputView.readLineLottoBonusNumber((number) => {
      this.#bonusLotto = new BonusLotto(number, this.#lotto).makeBonusLottoNumber();
      const winnging = new Statistics(
        [this.#lotto, this.#bonusLotto],
        this.#lottoTickets
      ).matchRankingMap();
      this.#printStatistics(winnging);
    });
  }

  #printStatistics(winnging) {
    OutputView.printWinningLotto(winnging);
    this.#printProfit(winnging);
  }

  #printProfit(winnging) {
    const profit = new Profit(winnging, this.#amount).formateProfitRate();
    OutputView.printProfitLotto(profit);
  }
}

module.exports = { GameController };
