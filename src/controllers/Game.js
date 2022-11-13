const GameInput = require('../views/GameInput');
const GameOutput = require('../views/GameOutput');
const Player = require('./Player');
const WinningNumber = require('./WinningNumber');
const Lotto = require('../domains/Lotto');
const Console = require('../domains/Console');
const DataProcessor = require('../domains/DataProcessor');

class Game {
  #instance = {};

  playLotto() {
    GameInput.enter(GameOutput.message.purchaseAmount, this.#buyLotto.bind(this));
  }

  #buyLotto(purchaseAmount) {
    this.#instance.player = new Player();
    this.#instance.player.purchaseLotto(purchaseAmount);

    const lottos = DataProcessor.convertLottosToPrintableLottos(this.#instance.player.getLottos());
    const quantityOfLotto = this.#instance.player.getQuantityOfLotto();
    GameOutput.printPlayersLottos(quantityOfLotto, lottos);

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbers) {
    this.#instance.winningNumber = new WinningNumber();
    this.#instance.winningNumber.registerSixNumbers(sixNumbers);

    GameInput.enter(GameOutput.message.bonus, this.#registerBonus.bind(this));
  }

  #registerBonus(bonus) {
    this.#instance.winningNumber.registerBonus(bonus);

    this.#calculateLottoResult();
  }

  #calculateLottoResult() {
    this.#instance.lotto = new Lotto(this.#instance.winningNumber.getSixNumbers());

    const result = this.#instance.lotto.calculateResult(
      this.#instance.player.getLottos(),
      this.#instance.winningNumber.getBonus()
    );
    const profit = this.#instance.player.calculateProfit(result);
    GameOutput.printResult(result, profit);

    this.#endGame();
  }

  #endGame() {
    Console.close();
  }
}

module.exports = Game;
