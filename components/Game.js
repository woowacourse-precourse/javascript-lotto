const { Console } = require('@woowacourse/mission-utils');
const ErrorCheck = require('./ErrorCheck');
const Lotto = require('../src/Lotto');
const INIT = require('../constants/basic number');
const Functions = require('./Functions');
const { SYSTME_MESSAGE } = require('../constants/game message');

class Game {
  #lottos;

  #purchaseAmount;

  #winningNumber;

  #bonusNumber;

  #winningResult;

  constructor() {
    this.#lottos = [];
    this.#winningNumber = [];
    this.#purchaseAmount = INIT;
    this.#bonusNumber = INIT;
    this.#winningResult = [];
  }

  start() {
    Console.readLine(SYSTME_MESSAGE.PURCHASE_INPUT, (money) => {
      ErrorCheck.purchase(money);
      this.#purchaseAmount = +money;
      this.purchaseLotto();
    });
  }

  purchaseLotto() {
    const lottoCount = Functions.getLottoCount(this.#purchaseAmount);
    Console.print(SYSTME_MESSAGE.PURCHASE_COUNT(lottoCount));

    this.#lottos = Functions.generateLottos(lottoCount);
    this.printLottos();
  }

  printLottos() {
    Functions.printLottoString(this.#lottos);
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    Console.readLine(SYSTME_MESSAGE.WINNING_INPUT, (inputNumber) => {
      this.#winningNumber = Functions.digitize(inputNumber);
      const lottoClass = new Lotto(this.#winningNumber);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(SYSTME_MESSAGE.BONUS_INPUT, (inputNumber) => {
      this.#bonusNumber = +inputNumber;
      ErrorCheck.bonusNumber(this.#winningNumber, this.#bonusNumber);
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
    Console.close();
  }
}

module.exports = Game;
