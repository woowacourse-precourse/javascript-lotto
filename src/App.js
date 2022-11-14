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
  play() {
    Utils.readLine(`${INPUT_AMOUNT_MESSAGE}\n`, (inputAmount) => {
      const lottoAmount = new Amount(inputAmount);
      const amount = lottoAmount.getAmount();

      const user = new User(amount);
      const userNumbersList = user.getNumbersList();

      this.printUserNumberList(userNumbersList);

      this.getInputLottoNumbers(userNumbersList, amount);
    });
  }

  /**
   *
   * @param {number[][]} userNumbersList
   * @param {number} amount
   */
  getInputLottoNumbers(userNumbersList, amount) {
    Utils.readLine(`\n${INPUT_LOTTO_NUMBERS}\n`, (inputLottoNumbers) => {
      const numbers = Utils.separateNumbers(inputLottoNumbers, ',');
      this.getInputBonusNumber(numbers, userNumbersList, amount);
    });
  }

  /**
   *
   * @param {number[]} numbers
   * @param {number[][]} userNumbersList
   * @param {number} amount
   */
  getInputBonusNumber(numbers, userNumbersList, amount) {
    Utils.readLine(`\n${INPUT_BONUS_NUMBER}\n`, (inputBonus) => {
      const lotto = new Lotto(numbers);
      const statistics = lotto.getStatistics(
        userNumbersList,
        Number(inputBonus)
      );

      const revenue = lotto.calculateRevenue(statistics, amount);

      this.printStatistics(statistics, revenue);

      Utils.close();
    });
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  printUserNumberList(userNumbersList) {
    Utils.print(`\n${userNumbersList.length}개를 구매했습니다.`);
    userNumbersList.forEach((numbers) =>
      Utils.print(`[${numbers.join(', ')}]`)
    );
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

// const app = new App();
// app.play();

module.exports = App;
