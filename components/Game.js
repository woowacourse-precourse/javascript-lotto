const { Console } = require('@woowacourse/mission-utils');
const Error = require('./Error');
const Lotto = require('./Lotto');
const INIT = require('./constants/basic number');
const Functions = require('./Functions');
const MESSAGE = require('./constants/message');

class Game {
  #lottos;

  #purchaseAmount;

  #winningNumber;

  #bonusNumber;

  #lottoRank;

  constructor() {
    this.#purchaseAmount = INIT;
  }

  start() {
    Console.readLine(MESSAGE.PURCHASE_INPUT, (money) => {
      this.purchaseAmount = +money;
      this.purchaseLotto();
    });
  }
}

module.exports = Game;
