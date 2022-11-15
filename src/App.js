const { Console, Random } = require("@woowacourse/mission-utils");
const {
  INPUT_MESSAGE,
  UNIT,
  RESULT_MEESAGE,
  PRIZE_MONEY,
  NEW_LINE,
} = require("./constant/constant");
const Lotto = require("./Lotto");
const Validation = require("./Validation");

class App {
  #money;
  #lottos;
  #winningNumbers;
  #bonusNumber;
  #result;
  #profitRatio;

  constructor() {
    this.#result = { 3: 0, 4: 0, 5: 0, 5.5: 0, 6: 0 };
  }

  play() {
    this.getMoney();
  }

  getMoney() {
    Console.readLine(INPUT_MESSAGE.money, (money) => {
      this.#money = Number(money);
      Validation.validateMoney(this.#money);
      this.#lottos = this.exchangeLotto(this.#money / UNIT.money);
      this.printLottos(this.#lottos);
      this.getWinningNumbers();
    });
  }

  exchangeLotto(quantity) {
    return [...Array(quantity)].map(
      () => new Lotto(this.generateRandomNumbers())
    );
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos(lottos) {
    Console.print(RESULT_MEESAGE.purchase(lottos.length));
    lottos.forEach((lotto) => lotto.printNumbers());
  }

  getWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.winningNumber, (numbers) => {
      this.#winningNumbers = numbers.split(",").map((number) => Number(number));
      Validation.validateNumbers(this.#winningNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonusNumber, (number) => {
      this.#bonusNumber = Number(number);
      Validation.validateBonusNumber(this.#winningNumbers, this.#bonusNumber);
      this.compare(this.#lottos, this.#winningNumbers, this.#bonusNumber);
    });
  }

  compare(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const match = lotto.compare(winningNumbers, bonusNumber);
      match >= 3 ? (this.#result[match] += 1) : null;
    });

    this.#profitRatio = this.caculateProfitRatio(
      this.#money,
      this.getTotalPrize(this.#result)
    );
    this.printResult();
  }

  printResult() {
    Console.print(RESULT_MEESAGE.lottoResult);
    Console.print(
      RESULT_MEESAGE.match3(this.#result[3]) +
        NEW_LINE +
        RESULT_MEESAGE.match4(this.#result[4]) +
        NEW_LINE +
        RESULT_MEESAGE.match5(this.#result[5]) +
        NEW_LINE +
        RESULT_MEESAGE.match5andBonus(this.#result[5.5]) +
        NEW_LINE +
        RESULT_MEESAGE.match6(this.#result[6])
    );
    Console.print(RESULT_MEESAGE.profit(this.#profitRatio));
    Console.close();
  }

  getTotalPrize(result) {
    return Object.entries(result).reduce(
      (total, [match, number]) => (total += PRIZE_MONEY[match] * number),
      0
    );
  }

  caculateProfitRatio(money, totalPrize) {
    return ((totalPrize / money) * 100).toFixed(1);
  }
}

module.exports = App;
