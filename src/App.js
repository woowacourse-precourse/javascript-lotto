const User = require('./User.js');
const Lotto = require('./Lotto.js');
const Utils = require('./Utils.js');
const Amount = require('./Amount.js');
const {
  INPUT_AMOUNT_MESSAGE,
  INPUT_BONUS_NUMBER,
  INPUT_LOTTO_NUMBERS,
} = require('./const.js');

class App {
  async play() {
    const lottoAmount = new Amount();
    await lottoAmount.setInputAmount(`${INPUT_AMOUNT_MESSAGE}\n`);
    const amount = lottoAmount.getAmount();

    const user = new User(amount);
    const userNumbersList = user.getNumbersList();

    this.printUserNumberList(userNumbersList);

    const inputLottoNumbers = await Utils.readLine(
      `\n${INPUT_LOTTO_NUMBERS}\n`
    );
    const bonus = await Utils.readLine(`${INPUT_BONUS_NUMBER}\n`);
    const numbers = Utils.separateNumbers(inputLottoNumbers, ',');

    const lotto = new Lotto(numbers);

    const statistics = lotto.getStatistics(userNumbersList, bonus);
    const revenue = lotto.calculateRevenue(statistics, amount);

    Utils.print(statistics);
    Utils.print(revenue);
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  printUserNumberList(userNumbersList) {
    Utils.print(`\n${userNumbersList.length}개를 구매했습니다.`);
    userNumbersList.forEach((numbers) => Utils.print(numbers));
  }
}

const app = new App();
app.play();

module.exports = App;
