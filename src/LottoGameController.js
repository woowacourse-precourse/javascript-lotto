const LottoGameService = require("./LottoGameService");

class LottoGameController {
  #gameService;

  constructor() {
    this.#gameService = new LottoGameService();
  }

  start(money) {
    this.#gameService.buyLotto(money);
  }

  outputLottoSize() {
    return this.#gameService.getLottosSize();
  }

  outputLottos() {
    return this.#gameService.getLottos();
  }

  inputWinNumber(numbers) {
    this.#gameService.setWinNumbers(numbers);
  }

  inputBonus(number) {
    this.#gameService.setBonus(number);
  }
}

module.exports = LottoGameController;
