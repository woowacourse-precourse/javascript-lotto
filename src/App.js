// @ts-check

const User = require('./User.js');
const Lotto = require('./Lotto.js');
const LottoManager = require('./LottoManager.js');
const Utils = require('./utils/Utils.js');
const Printer = require('./utils/Printer.js');
const { message } = require('./utils/messages.js');
const { lotto } = require('./utils/const.js');

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
    Utils.readLine(message.INPUT_AMOUNT_MESSAGE, (inputAmount) => {
      this.#user.setAmount(inputAmount);
      const amount = this.#user.getAmount();
      const numbersList = this.generateNumbersList(amount);

      this.#user.setNumbersList(numbersList);
      const userNumbersList = this.#user.getNumbersList();
      Printer.printUserNumberList(userNumbersList);

      this.#askLottoNumbers();
    });
  }

  /**
   *
   * @param {number} amount
   * @returns {number[][]}
   */
  generateNumbersList(amount) {
    const list = [];

    for (let i = 0; i < amount / lotto.PRICE; i++) {
      const randomNumbers = Utils.getRandomNumbers(
        lotto.MIN_NUMBER,
        lotto.MAX_NUMBER,
        lotto.MAX_COUNT
      );

      const lottoNumbers = this.publishLotto(randomNumbers);
      list.push(lottoNumbers);
    }

    return list;
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

  #askLottoNumbers() {
    Utils.readLine(
      message.INPUT_LOTTO_NUMBERS_MESSAGE,
      (inputWinningNumbers) => {
        const lottoNumbers = Utils.separateNumbers(inputWinningNumbers, ',');
        this.#lottoManager.setWinningNumbers(lottoNumbers);
        this.#askBonusNumber();
      }
    );
  }

  #askBonusNumber() {
    Utils.readLine(
      `\n${message.INPUT_BONUS_NUMBER_MESSAGE}\n`,
      (inputBonus) => {
        this.#lottoManager.setBonusNumber(inputBonus);
        const amount = this.#user.getAmount();
        const userNumbersList = this.#user.getNumbersList();

        const statistics = this.#generateStatistics(amount, userNumbersList);
        Printer.printStatistics(statistics.prizes, statistics.revenue);

        Utils.close();
      }
    );
  }

  /**
   *
   * @param {number} amount
   * @param {number[][]} userNumbersList
   * @returns {{prizes:{first: number, second: number, third:number, fourth:number, fifth:number}, revenue: string}}
   */
  #generateStatistics(amount, userNumbersList) {
    const prizes = this.#lottoManager.getPrizes(userNumbersList);
    const revenue = this.#lottoManager.calculateRevenue(prizes, amount);

    return { prizes, revenue };
  }
}

module.exports = App;
