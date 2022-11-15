const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const lottoUtils = require('./utils/lottoUtils');
const appUtils = require('./utils/appUtils');
const APP = require('./constants/app');
const LOTTO = require('./constants/lotto');

class App {
  #amount;

  #prizeNumbers;

  #bonusNumber;

  #lottos;

  #lotto;

  constructor() {
    this.getAmount = this.getAmount.bind(this);
    this.getPrizeNumber = this.getPrizeNumber.bind(this);
    this.getBonusNumber = this.getBonusNumber.bind(this);
  }

  getAmount(input) {
    appUtils.validateAmount(input);

    this.#amount = input / LOTTO.UNIT;
    this.#lottos = lottoUtils.createLottos(this.#amount);

    appUtils.printEmpty();
    Console.print(`${this.#amount}개를 구매했습니다.`);
    appUtils.printArray(this.#lottos);

    this.nextQuestion(APP.PRIZE_NUMBER_MESSAGE, this.getPrizeNumber);
  }

  getPrizeNumber(input) {
    appUtils.validatePrizeNumbers(input);

    this.#prizeNumbers = input.split(APP.SEPARATOR).map((item) => Number(item));

    this.nextQuestion(APP.BONUS_NUMBER_MESSAGE, this.getBonusNumber);
  }

  getBonusNumber(input) {
    appUtils.validateBonusNumber(input, this.#prizeNumbers);

    this.#bonusNumber = Number(input);

    this.endLotto();
  }

  endLotto() {
    this.#lotto = new Lotto(this.#prizeNumbers);
    const stats = this.#lotto.getStats(this.#lottos, this.#bonusNumber);
    const resultTexts = lottoUtils.getResultTexts(stats, this.#amount);

    appUtils.printEmpty();
    resultTexts.forEach((text) => Console.print(text));

    this.exit();
  }

  nextQuestion(message, callback) {
    Console.readLine(message, callback);
  }

  exit() {
    Console.close();
  }

  play() {
    this.nextQuestion(APP.AMOUNT_MESSAGE, this.getAmount);
  }
}

module.exports = App;
