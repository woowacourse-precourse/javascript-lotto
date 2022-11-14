const { Console } = require('@woowacourse/mission-utils');
const utils = require('./utils/utils');
const appUtils = require('./utils/appUtils');
const APP = require('./constants/app');

class App {
  #amount;

  #prizeNumbers;

  #bonusNumber;

  #lottos;

  constructor() {
    this.getAmount = this.getAmount.bind(this);
    this.getPrizeNumber = this.getPrizeNumber.bind(this);
    this.getBonusNumber = this.getBonusNumber.bind(this);
  }

  getAmount(input) {
    appUtils.validateAmount(input);

    this.#amount = input / APP.MINIMUM_AMOUNT;
    this.#lottos = utils.createLottos(this.#amount);

    Console.print(`\n${this.#amount}개를 구매했습니다.`);
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
    await appUtils.synchronousReadLine('\n당첨 번호를 입력해 주세요.\n', this.getPrizeNumber);
    await appUtils.synchronousReadLine('\n보너스 번호를 입력해 주세요.\n', this.getBonusNumber);
    Console.close();
  }
}

new App().play();

module.exports = App;
