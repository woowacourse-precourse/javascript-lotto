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

  #winningResult;

  constructor() {
    this.#lottos = [];
    this.#winningNumber = new Set();
    this.#purchaseAmount = INIT;
    this.#bonusNumber = INIT;
    this.#winningResult = [];
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

  getWinningNumbers() {
    Console.readLine(MESSAGE.WINNING_INPUT, (inputNumber) => {
      this.#winningNumber = Functions.digitize(inputNumber);

      const lottoClass = new Lotto(this.#winningNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_INPUT, (inputNumber) => {
      this.#bonusNumber = +inputNumber;
      this.checkWinningResult();
    });
  }

  checkWinningResult() {
    this.#winningResult = Functions.getWinningResult(
      this.#lottos,
      this.#winningNumber,
      this.#bonusNumber
    );

    this.getLottoYield();
  }

  getLottoYield() {
    const lottoYield = Functions.calLottoYield(
      this.#purchaseAmount,
      this.#winningResult
    );
    this.printLottoResult(lottoYield);
  }

  printLottoResult(lottoYield) {
    Functions.printResult(this.#winningResult, lottoYield);
  }
}

module.exports = Game;
