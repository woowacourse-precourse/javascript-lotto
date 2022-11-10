const Simulator = require('./Simulator');
const Player = require('./Player');

class Game {
  #player;

  constructor() {
    this.#player = new Player();
  }

  playLotto() {
    Simulator.execute(this.lottoGame.bind(this));
  }

  lottoGame(priceString) {
    this.#player.buyLotto(priceString);
    this.#player.getLotto();

    // 당첨 번호 등록
    // 당첨 결과 계산
    // 결과 출력
  }
}

module.exports = Game;
