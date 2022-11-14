const GameInput = require('../views/GameInput');
const GameOutput = require('../views/GameOutput');
const Player = require('../domains/Player');
const Lotto = require('../domains/Lotto');
const SixNumbers = require('../domains/SixNumbers');
const Bonus = require('../domains/Bonus');
const Console = require('../utils/Console');
const Profit = require('../services/Profit');

class Game {
  #instance = {};

  playLotto() {
    GameInput.enter(GameOutput.message.purchaseAmount, this.#purchaseLotto.bind(this));
  }

  #purchaseLotto(purchaseAmount) {
    this.#instance.player = new Player(purchaseAmount);
    GameOutput.printLottos(this.#instance.player.getPurchaseResult());

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbers) {
    this.#instance.sixNumbers = new SixNumbers(sixNumbers);

    GameInput.enter(GameOutput.message.bonus, this.#registerBonus.bind(this));
  }

  #registerBonus(bonus) {
    this.#instance.bonus = new Bonus(bonus, this.#instance.sixNumbers.getSixNumbers());

    this.#calculateLottoResult();
  }

  #calculateLottoResult() {
    this.#instance.lotto = new Lotto(this.#instance.sixNumbers.getSixNumbers());

    const result = this.#instance.lotto.calculateGradeResult({
      lottos: this.#instance.player.getLottos(),
      bonus: this.#instance.bonus.getBonus(),
    });
    GameOutput.printResult(
      result,
      Profit.calculate({ result, purchaseAmount: this.#instance.player.getPurchaseAmount() })
    );

    this.#endGame();
  }

  #endGame() {
    Console.close();
  }
}

module.exports = Game;
