// @ts-check

const User = require('./User.js');
const Lotto = require('./Lotto.js');
const LottoManager = require('./LottoManager.js');
const Utils = require('./Utils.js');
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
  LOTTO_PRICE,
  LOTTO_MIN_NUMBER,
  LOTTO_MAX_NUMBER,
  LOTTO_MAX_COUNT,
} = require('./const.js');

class App {
  /** @type {User} */
  #user;

  /** @type {LottoManager} */
  #lottoManager;

  constructor() {
    this.#user = new User();
    this.#lottoManager = new LottoManager();
  }

  play() {
    Utils.readLine(`${INPUT_AMOUNT_MESSAGE}\n`, (inputAmount) => {
      this.#user.setAmount(inputAmount);
      const amount = this.#user.getAmount();

      const numbersList = this.generateNumbersList(amount);

      this.#user.setNumbersList(numbersList);
      const userNumbersList = this.#user.getNumbersList();

      this.#printUserNumberList(userNumbersList);

      this.#askLottoNumbers();
    });
  }

  /**
   *
   * @param {number[]} numbers
   * @returns {number[]}
   */
  publishLotto(numbers) {
    const lotto = new Lotto(numbers);
    return lotto.getNumbers();
  }

  /**
   *
   * @param {number} amount
   * @returns {number[][]}
   */
  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / LOTTO_PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(
        LOTTO_MIN_NUMBER,
        LOTTO_MAX_NUMBER,
        LOTTO_MAX_COUNT
      );

      const lottoNumbers = this.publishLotto(randomNumbers);
      list.push(lottoNumbers);
    }

    return list;
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

  #askLottoNumbers() {
    Utils.readLine(`\n${INPUT_LOTTO_NUMBERS}\n`, (inputWinningNumbers) => {
      this.#setWinningNumbers(inputWinningNumbers);
      this.#askBonusNumber();
    });
  }

  /**
   *
   * @param {string} inputWinningNumbers
   */
  #setWinningNumbers(inputWinningNumbers) {
    const lottoNumbers = Utils.separateNumbers(inputWinningNumbers, ',');
    this.#lottoManager.setWinningNumbers(lottoNumbers);
  }

  #askBonusNumber() {
    Utils.readLine(`\n${INPUT_BONUS_NUMBER}\n`, (inputBonus) => {
      this.#lottoManager.setBonusNumber(inputBonus);

      const amount = this.#user.getAmount();
      const userNumbersList = this.#user.getNumbersList();
      const bonusNumber = this.#lottoManager.getBonusNumber();

      const statistics = this.#lottoManager.getStatistics(
        userNumbersList,
        bonusNumber
      );
      const revenue = this.#lottoManager.calculateRevenue(statistics, amount);

      this.#printStatistics(statistics, revenue);

      Utils.close();
    });
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
