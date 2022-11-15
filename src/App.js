const { LOTTO } = require('./constants');
const { ConsoleAdapter } = require('./adapters');
const { LottoGenerator } = require('./domain');
const { LottoValidator } = require('./validators');
const { ValidationError } = require('./errors');

class App {
  #console;
  #lottoGenerator;

  constructor() {
    this.#console = new ConsoleAdapter();
    this.#lottoGenerator = new LottoGenerator();
  }

  async play() {
    const cost = await this.#queryPurchaseCost();
    const lotteryTickets = this.#purchaseLotteryTickets(cost);

    this.#printPurchaseInformation(lotteryTickets);

    const winningNumbers = await this.#queryWinningNumbers();
    console.log(winningNumbers);
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

  #purchaseLotteryTickets(cost) {
    const quantity = cost / LOTTO.PRICE;
    const lotteryTickets = this.#lottoGenerator.createMultipleLotto(quantity);

    return lotteryTickets;
  }

  #printPurchaseInformation(lotteryTickets) {
    this.#console.print(`\n${lotteryTickets.length}개를 구매했습니다.`);
    lotteryTickets.forEach((lotto) => this.#console.print(lotto.numbers));
  }

  async #queryWinningNumbers() {
    const input = await this.#requestUserInput('\n당첨 번호를 입력해 주세요.');
    const winningNumbers = input.split(',').map(Number);

    LottoValidator.validateWinningNumbers(winningNumbers);

    return winningNumbers;
  }
}

const app = new App();
app.play();

module.exports = App;
