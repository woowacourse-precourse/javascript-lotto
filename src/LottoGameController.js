const OutputView = require("./view/OutputView");
const LottoGameService = require("./LottoGameService");

class LottoGameController {
  #outputView;
  #gameService;

  constructor() {
    this.#outputView = new OutputView();
    this.#gameService = new LottoGameService();
  }

  start(money) {
    const lottos = this.#gameService.buyLotto(money);
    this.#outputView.showLottos(lottos);
  }
}

module.exports = LottoGameController;
