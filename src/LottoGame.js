const { Console } = require('@woowacourse/mission-utils');

const LottoManager = require('./LottoManager');
const User = require('./User');

class LottoGame {
  constructor() {
    this.lottoManager = new LottoManager();
    this.user = new User();
  }

  startGame() {
    this.#inputPurchaseMoney();
  }

  #inputPurchaseMoney() {
    this.user.inputPurchaseMoney((purchaseLottoCount) => {
      this.#purchaseLottos(purchaseLottoCount);

      this.#inputWinningNumber();
    });
  }

  #purchaseLottos(purchaseLottoCount) {
    this.user.setLottos(this.lottoManager.publishLottos(purchaseLottoCount));
    this.user.printLottos();
  }

  #inputWinningNumber() {
    this.lottoManager.inputWinningNumber(() => {
      this.#inputBonusNumber();
    });
  }

  #inputBonusNumber() {
    this.lottoManager.inputBouseNumber(() => {
      this.#guessWinningDetail();
    });
  }

  #guessWinningDetail() {
    this.user.printWinningDetail(
      this.lottoManager.getWinningNumber(),
      this.lottoManager.getBouseNumber,
    );

    this.#exit();
  }

  #exit() {
    Console.close();
  }
}

module.exports = LottoGame;
