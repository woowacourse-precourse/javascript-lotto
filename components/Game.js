const { Console } = require('@woowacourse/mission-utils');
const { SYSTME_MESSAGE } = require('../constants/game message');
const ErrorCheck = require('./ErrorCheck');
const Lotto = require('../src/Lotto');
const INIT = require('../constants/basic number');

class Game {
  #lottos;

  #purchaseAmount;

  #winningNumber;

  #bonusNumber;

  #winningResult;

  #lotto;

  #lottoYield;

  constructor() {
    this.#lottos = [];
    this.#purchaseAmount = INIT;
    this.#winningNumber = [];
    this.#bonusNumber = INIT;
    this.#winningResult = [];
    this.#lotto = INIT;
    this.#lottoYield = [];
  }

  start() {
    Console.readLine(SYSTME_MESSAGE.PURCHASE_INPUT, (money) => {
      this.#purchaseAmount = Number(money);
      this.validateMoney();
    });
  }

  validateMoney() {
    ErrorCheck.purchase(this.#purchaseAmount);
    this.purchaseLottos();
  }

  purchaseLottos() {
    const lottoCount = Lotto.getCount(this.#purchaseAmount);

    Console.print(SYSTME_MESSAGE.PURCHASE_COUNT(lottoCount));
    this.#lottos = Lotto.generate(lottoCount);
    this.printPurchasedLottos();
  }

  printPurchasedLottos() {
    Lotto.printToString(this.#lottos);
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    Console.readLine(SYSTME_MESSAGE.WINNING_INPUT, (inputNumber) => {
      this.#winningNumber = Lotto.digitize(inputNumber);
      this.validateWinningNumber();
    });
  }

  validateWinningNumber() {
    this.#lotto = new Lotto(this.#winningNumber);
    this.getBonusNumber();
  }

  getBonusNumber() {
    Console.readLine(SYSTME_MESSAGE.BONUS_INPUT, (inputNumber) => {
      this.#bonusNumber = +inputNumber;
      this.validateBonusNumber();
    });
  }

  validateBonusNumber() {
    ErrorCheck.bonusNumber(this.#winningNumber, this.#bonusNumber);
    this.getWinningResult();
  }

  getWinningResult() {
    this.#winningResult = this.#lotto.getWinningResult(
      this.#lottos,
      this.#bonusNumber
    );
    this.getLottoYield();
  }

  getLottoYield() {
    this.#lottoYield = Lotto.calYield(
      this.#purchaseAmount,
      this.#winningResult
    );
    this.printLottoResult();
  }

  printLottoResult() {
    Lotto.printResult(this.#winningResult, this.#lottoYield);
    Console.close();
  }
}

module.exports = Game;
