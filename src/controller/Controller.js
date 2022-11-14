const View = require('../view/View');
const LottoManager = require('./LottoManager');

class Controller {
  #lottoManager;

  constructor() {
    this.#lottoManager = new LottoManager();
  }

  start() {
    View.printStart();
    View.readLine((amount) => {
      this.#lottoManager.purchase(amount);
      View.printQuantity(this.#lottoManager.quantity);
      this.renderPurchasedLottos();
    });
  }

  renderPurchasedLottos() {
    this.#lottoManager.purchasedLottos
      .forEach((purchasedLotto) => {
        View.printArray(purchasedLotto);
      });
    this.renderWinningLotto();
  }

  renderWinningLotto() {
    View.printWinningLottoNotice();
    View.readLine((numbers) => {
      this.#lottoManager.generateWinningLotto(numbers);
      this.renderBonusNumber();
    });
  }

  renderBonusNumber() {
    View.printBonusNumberNotice();
    View.readLine((number) => {
      this.#lottoManager.generateBonusNumber(number);
      this.renderStatistic();
    });
  }

  renderStatistic() {
    this.#lottoManager.generateStatistic();
    View.printStatistic(this.#lottoManager.counts);
    View.printPercentageRevenue(this.#lottoManager.percentageRevenue);
    View.close();
  }
}

module.exports = Controller;
