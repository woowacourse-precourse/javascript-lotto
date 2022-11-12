const { Console } = require('@woowacourse/mission-utils');
const Error = require('./Error');
const Lotto = require('./Lotto');
const INIT = require('../constants/basic number');
const Functions = require('./Functions');
const MESSAGE = require('../constants/message');

class Game {
  #lottos;

  #purchaseAmount;

  constructor() {
    this.#lottos = [];
    this.#winningNumber = new Set();
    this.#purchaseAmount = INIT;
    this.#bonusNumber = INIT;
    this.#lottoRank = [];
  }

  start() {
    Console.readLine(MESSAGE.PURCHASE_INPUT, (money) => {
      Error.purchase(money);

      this.#purchaseAmount = +money;
      this.purchaseLotto();
    });
  }

  purchaseLotto() {
    const lottoCount = Functions.getLottoCount(this.#purchaseAmount);

    this.#lottos = Functions.generateLottos(lottoCount);
    Console.print(MESSAGE.PURCHASE_COUNT(lottoCount));
    this.printLottos();
  }

  printLottos() {
    this.#lottos.forEach((lotto) => {
      Console.print(lotto);
    });
    this.getWinningNumbers();
  }
}

module.exports = Game;
