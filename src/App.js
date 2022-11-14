const { LOTTO } = require('./constants');
const { ConsoleAdapter } = require('./adapters');
const { ValidationError } = require('./errors');

class App {
  #console;

  constructor() {
    this.#console = new ConsoleAdapter();
  }

  async play() {
    const cost = await this.#queryPurchaseCost();
    console.log(cost);
  }

  async #queryPurchaseCost() {
    const input = await this.#requestUserInput('구입 금액을 입력해 주세요.');
    const cost = Number(input);

    this.#validatePurchaseCost(cost);

    return cost;
  }

  #requestUserInput(query) {
    const userInput = new Promise((resolve) => {
      this.#question(query, resolve);
    });

    return userInput;
  }

  #question(query, callback) {
    this.#console.readLine(`${query}\n`, (input) => callback(input));
  }

  #validatePurchaseCost(cost) {
    if (cost % LOTTO.PRICE !== 0) {
      throw new ValidationError('구입 금액은 1,000원 단위여야 합니다.');
    }
  }
}

const app = new App();
app.play();

module.exports = App;
