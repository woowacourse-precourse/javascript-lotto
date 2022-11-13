// @ts-check

const User = require('./User.js');
const Lotto = require('./Lotto.js');
const Utils = require('./Utils.js');
const Amount = require('./Amount.js');
const {
  INPUT_AMOUNT_MESSAGE,
  INPUT_BONUS_NUMBER,
  INPUT_LOTTO_NUMBERS,
  STATISTICS,
  DIVIDER,
  FIFTH_PRIZE,
  FOURTH_PRIZE,
  THIRD_PRIZE,
  SECOND_PRIZE,
  FIRST_PRIZE,
} = require('./const.js');

class App {
  async play() {
    const amount = await this.getLottoAmount();
    const userNumbersList = this.getUserNumberList(amount);
    this.printUserNumberList(userNumbersList);

    const { statistics, revenue } = await this.getStatistics(
      amount,
      userNumbersList
    );
    this.printStatistics(statistics, revenue);

    Utils.close();
  }

  async getLottoAmount() {
    const lottoAmount = new Amount();
    await lottoAmount.setInputAmount(`${INPUT_AMOUNT_MESSAGE}\n`);

    return lottoAmount.getAmount();
  }

  /**
   *
   * @param {number} amount
   * @returns
   */
  getUserNumberList(amount) {
    const user = new User(amount);

    return user.getNumbersList();
  }

  /**
   *
   * @param {number} amount
   * @param {number[][]} userNumbersList
   * @returns
   */
  async getStatistics(amount, userNumbersList) {
    const inputLottoNumbers = await Utils.readLine(
      `\n${INPUT_LOTTO_NUMBERS}\n`
    );
    const bonus = await Utils.readLine(`\n${INPUT_BONUS_NUMBER}\n`);
    const numbers = Utils.separateNumbers(inputLottoNumbers, ',');

    const lotto = new Lotto(numbers);

    const statistics = lotto.getStatistics(userNumbersList, Number(bonus));
    const revenue = lotto.calculateRevenue(statistics, amount);

    return { statistics, revenue };
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  printUserNumberList(userNumbersList) {
    Utils.print(`\n${userNumbersList.length}개를 구매했습니다.`);
    userNumbersList.forEach((numbers) => Utils.print(numbers));
  }

  /**
   *
   * @param {{first: number, second: number, third:number, fourth:number, fifth:number}} statistics
   * @param {string} revenue
   */
  printStatistics(statistics, revenue) {
    Utils.print(`\n${STATISTICS}`);
    Utils.print(`${DIVIDER}`);
    Utils.print(`${FIFTH_PRIZE} - ${statistics.fifth}개`);
    Utils.print(`${FOURTH_PRIZE} - ${statistics.fourth}개`);
    Utils.print(`${THIRD_PRIZE} - ${statistics.third}개`);
    Utils.print(`${SECOND_PRIZE} - ${statistics.second}개`);
    Utils.print(`${FIRST_PRIZE} - ${statistics.first}개`);
    Utils.print(`총 수익률은 ${revenue}%입니다.`);
  }
}

const app = new App();
app.play();

module.exports = App;
