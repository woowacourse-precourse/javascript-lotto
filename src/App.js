const MissionUtils = require('@woowacourse/mission-utils');
const { amountValidate } = require('./Validates');

class App {
  #amount;

  #lottos;

  #winNumbers;

  #bonusNumber;

  #revenue;

  constructor() {
    this.#amount = 0;
    this.#lottos = [];
    this.#winNumbers = [];
    this.#bonusNumber = 0;
    this.#revenue = 0;
  }

  play() {
    this.inputAmount();
  }

  inputAmount() {
    MissionUtils.Console.readLine('구입금액을 입력해 주세요.\n', (amount) => {
      this.setAmount(amount);
    });
  }

  issueLottos() {}

  setAmount(amount) {
    amountValidate(amount);
    this.#amount = amount;
  }

  getAmount() {
    return this.#amount;
  }

  setLottos(lottos) {
    this.#lottos = lottos;
  }

  getLottos() {
    return this.#lottos;
  }

  setWinNumbers(number) {
    this.#winNumbers = number;
  }

  getWinNumbers() {
    return this.#winNumbers;
  }

  setBonusNumber(number) {
    this.#bonusNumber = number;
  }

  getBonusNumber() {
    return this.#bonusNumber;
  }

  setRevenue(revenue) {
    this.#revenue = revenue;
  }

  getRevenue() {
    return this.#revenue;
  }

  getRevenueRate() {
    const revenue = this.getRevenue();
    const amount = this.getAmount();
    if (revenue === 0) return (0).toFixed(1);

    const revenueRate = (revenue / amount) * 100;
    return revenueRate.toFixed(1);
  }
}

const app = new App();
app.play();

module.exports = App;
