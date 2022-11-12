const GameInput = require('./GameInput');
const GameOutput = require('./GameOutput');
const Player = require('./Player');
const WinningNumber = require('./WinningNumber');

class Game {
  #instance = {};

  playLotto() {
    GameInput.enter(GameOutput.message.purchaseAmount, this.#buyLotto.bind(this));
  }

  #buyLotto(purchaseAmount) {
    this.#instance.player = new Player();
    this.#instance.player.buyLotto(purchaseAmount);
    this.#instance.player.getLotto();
    this.#instance.player.printLotto();

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbers) {
    this.#instance.winningNumber = new WinningNumber();
    this.#instance.winningNumber.registerSixNumbers(sixNumbers);

    GameInput.enter(GameOutput.message.bonus, this.#registerBonus.bind(this));
  }

  #registerBonus(bonus) {
    this.#instance.winningNumber.registerBonus(bonus);

    // TODO 당첨 결과 계산
    // TODO 결과 출력
  }
}

module.exports = Game;
