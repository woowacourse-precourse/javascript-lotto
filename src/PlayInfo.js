const GameGuide = require('./GameGuide');

const gameGuide = new GameGuide();

class PlayInfo {
  #amount;
  #generatedLotto;

  constructor() {
    this.#amount = null;
    this.#generatedLotto = null;
  }

  setAmount(amount) {
    this.#amount = amount;
  }

  setGeneratedLotto(generatedLotto) {
    this.#generatedLotto = generatedLotto;

    gameGuide.printGeneratedLottoQuantity(this.#generatedLotto.length);
    gameGuide.printGeneratedLotto(this.#generatedLotto);
  }
}

module.exports = PlayInfo;
