const { Console } = require('@woowacourse/mission-utils');
const { SYSTEM_MESSAGE } = require('../constants/game message');
const BASIC_NUMBER = require('../constants/basic number');
const ErrorCheck = require('./ErrorCheck');
const Lotto = require('../src/Lotto');

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
    this.#purchaseAmount = BASIC_NUMBER.INIT;
    this.#winningNumber = [];
    this.#bonusNumber = BASIC_NUMBER.INIT;
    this.#winningResult = [];
    this.#lotto = BASIC_NUMBER.INIT;
    this.#lottoYield = [];
  }

  start() {
    Console.readLine(SYSTEM_MESSAGE.PURCHASE_INPUT, (money) => {
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

    Console.print(SYSTEM_MESSAGE.PURCHASE_COUNT(lottoCount));
    this.#lottos = Lotto.generate(lottoCount);
    this.printPurchasedLottos();
  }

  printPurchasedLottos() {
    Lotto.printToString(this.#lottos);
    this.getWinningNumbers();
  }

  getWinningNumbers() {
    Console.readLine(SYSTEM_MESSAGE.WINNING_INPUT, (inputNumber) => {
      this.#winningNumber = Lotto.digitize(inputNumber);
      this.validateWinningNumber();
    });
  }

  validateWinningNumber() {
    this.#lotto = new Lotto(this.#winningNumber);
    this.getBonusNumber();
  }

  getBonusNumber() {
    Console.readLine(SYSTEM_MESSAGE.BONUS_INPUT, (inputNumber) => {
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
