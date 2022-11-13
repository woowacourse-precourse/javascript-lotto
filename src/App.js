const { Console } = require('@woowacourse/mission-utils');
const appUtils = require('./utils/appUtils');
const APP = require('./constants/app');

class App {
  #amount;

  constructor() {
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(input) {
    appUtils.validateAmount(input);
    this.#amount = input;
  }

  readLine(message, callback) {
    Console.readLine(message, (input) => callback(input));
  }

  play() {
    this.readLine(APP.AMOUNT_MESSAGE, this.handleInput);
  }
}

module.exports = App;
