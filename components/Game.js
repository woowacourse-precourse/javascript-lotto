const { Console } = require('@woowacourse/mission-utils');
const Error = require('./Error');
const Lotto = require('./Lotto');
const INIT = require('../constants/basic number');
const Functions = require('./Functions');
const MESSAGE = require('../constants/message');

class Game {
  #lottos;

  #purchaseAmount;

  #winningNumber;

  #bonusNumber;

  #lottoRank;

  constructor() {
    this.#lottos = [];
    this.#purchaseAmount = INIT;
  }

  start() {
    Console.readLine(MESSAGE.PURCHASE_INPUT, (money) => {
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
}

module.exports = Game;
