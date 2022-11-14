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
  /** @type {number} */
  #amount;

  /** @type {number[][]} */
  #userNumbersList;

  /** @type {number[]} */
  #lottoNumbers;

  play() {
    Utils.readLine(`${INPUT_AMOUNT_MESSAGE}\n`, (inputAmount) => {
      this.#setAmount(inputAmount);
      const amount = this.#getAmount();

      this.#setUserNumbersList(amount);
      const userNumbersList = this.#getUserNumbersList();
      this.#printUserNumberList(userNumbersList);

      this.#askLottoNumbers();
    });
  }

  /**
   *
   * @param {string} inputAmount
   */
  #setAmount(inputAmount) {
    const lottoAmount = new Amount(inputAmount);
    const amount = lottoAmount.getAmount();
    this.#amount = amount;
  }

  /**
   *
   * @returns {number}
   */
  #getAmount() {
    return this.#amount;
  }

  /**
   *
   * @param {number} amount
   */
  #setUserNumbersList(amount) {
    const user = new User(amount);
    const userNumbersList = user.getNumbersList();

    this.#userNumbersList = userNumbersList;
  }

  /**
   *
   * @returns {number[][]}
   */
  #getUserNumbersList() {
    return this.#userNumbersList;
  }

  #askLottoNumbers() {
    Utils.readLine(`\n${INPUT_LOTTO_NUMBERS}\n`, (inputLottoNumbers) => {
      this.#setLottoNumbers(inputLottoNumbers);
      this.#askBonusNumber();
    });
  }

  /**
   *
   * @param {string} inputLottoNumbers
   */
  #setLottoNumbers(inputLottoNumbers) {
    const lottoNumbers = Utils.separateNumbers(inputLottoNumbers, ',');
    this.#lottoNumbers = lottoNumbers;
  }

  #askBonusNumber() {
    Utils.readLine(`\n${INPUT_BONUS_NUMBER}\n`, (inputBonus) => {
      const lotto = new Lotto(this.#lottoNumbers);
      const statistics = lotto.getStatistics(
        this.#userNumbersList,
        Number(inputBonus)
      );

      const revenue = lotto.calculateRevenue(statistics, this.#amount);

      this.#printStatistics(statistics, revenue);

      Utils.close();
    });
  }

  /**
   *
   * @param {number[][]} userNumbersList
   */
  #printUserNumberList(userNumbersList) {
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
  #printStatistics(statistics, revenue) {
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
