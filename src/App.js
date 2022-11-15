const { Console } = require('@woowacourse/mission-utils');
const Lotto = require('./Lotto');
const utils = require('./utils/utils');
const appUtils = require('./utils/appUtils');
const APP = require('./constants/app');

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

    this.#amount = input / APP.MINIMUM_AMOUNT;
    this.#lottos = utils.createLottos(this.#amount);

    appUtils.printEmpty();
    Console.print(`${this.#amount}개를 구매했습니다.`);
    appUtils.printArray(this.#lottos);
  }

  getPrizeNumber(input) {
    appUtils.validatePrizeNumbers(input);
    this.#prizeNumbers = input.split(APP.SEPARATOR).map((item) => Number(item));
  }

  getBonusNumber(input) {
    appUtils.validateBonusNumber(input, this.#prizeNumbers);
    this.#bonusNumber = Number(input);
  }

  async play() {
    await appUtils.synchronousReadLine(APP.AMOUNT_MESSAGE, this.getAmount);
    appUtils.printEmpty();
    await appUtils.synchronousReadLine(APP.WINNER_NUMBER_MESSAGE, this.getPrizeNumber);
    appUtils.printEmpty();
    await appUtils.synchronousReadLine(APP.BONUS_NUMBER_MESSAGE, this.getBonusNumber);

    Console.close();
  }
}

module.exports = App;
