const { Console } = require('@woowacourse/mission-utils');
const utils = require('./utils/utils');
const appUtils = require('./utils/appUtils');
const APP = require('./constants/app');

class App {
  #amount;

  #lottos;

  constructor() {
    this.handleAmount = this.handleAmount.bind(this);
  }

  handleAmount(input) {
    appUtils.validateAmount(input);

    this.#amount = input / APP.MINIMUM_AMOUNT;
    this.#lottos = utils.createLottos(this.#amount);

    Console.print(`\n${this.#amount}개를 구매했습니다.`);
    appUtils.printArray(this.#lottos);
  }

  readLine(message, callback) {
    Console.readLine(message, (input) => callback(input));
  }

  play() {
    this.readLine(APP.AMOUNT_MESSAGE, this.handleAmount);
  }
}

module.exports = App;
