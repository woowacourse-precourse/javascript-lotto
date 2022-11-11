const GameInput = require('./GameInput');
const GameOutput = require('./GameOutput');
const Player = require('./Player');
const LottoNumber = require('./LottoNumber');

class Game {
  #player;

  #lottoNumber;

  playLotto() {
    GameInput.enter(GameOutput.message.price, this.#buyLotto.bind(this));
  }

  #buyLotto(priceString) {
    this.#player = new Player();
    this.#player.buyLotto(priceString);
    this.#player.getLotto();
    this.#player.printLotto();

    GameInput.enter(GameOutput.message.sixNumbers, this.#registerSixNumbers.bind(this));
  }

  #registerSixNumbers(sixNumbersString) {
    this.#lottoNumber = new LottoNumber();
    this.#lottoNumber.registerSixNumbers(sixNumbersString);

    GameInput.enter(GameOutput.message.bonusNumber, this.#registerBonus.bind(this));
  }

  #registerBonus(bonusString) {
    this.#lottoNumber.registerBonus(bonusString);

    // TODO 당첨 결과 계산
    // TODO 결과 출력
  }
}

module.exports = Game;
