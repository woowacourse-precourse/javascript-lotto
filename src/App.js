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
      this.#money = +money;
      Validation.validateMoney(this.#money);
      this.#lottos = this.exchangeLotto(this.#money / UNIT.money);
      this.printLottos(this.#lottos);
      this.getWinningNumbers();
    });
  }

  exchangeLotto(quantity) {
    const lottos = [...Array(quantity)].map(
      () => new Lotto(this.generateRandomNumbers())
    );
    return lottos;
  }

  generateRandomNumbers() {
    return Random.pickUniqueNumbersInRange(1, 45, 6);
  }

  printLottos(lottos) {
    Console.print(RESULT_MEESAGE.purchase.replace("N", lottos.length));
    lottos.forEach((lotto) => lotto.printNumbers());
  }

  getWinningNumbers() {
    Console.readLine(INPUT_MESSAGE.winningNumber, (numbers) => {
      this.#winningNumbers = numbers.split(",").map((number) => +number);
      Validation.validateWinningNumbers(this.#winningNumbers);
      this.getBonusNumber();
    });
  }

  getBonusNumber() {
    Console.readLine(INPUT_MESSAGE.bonusNumber, (number) => {
      Validation.validateBonusNumber(this.#winningNumbers, number);
      this.#bonusNumber = +number;
      this.compare(this.#lottos, this.#winningNumbers, this.#bonusNumber);
    });
  }

  compare(lottos, winningNumbers, bonusNumber) {
    lottos.forEach((lotto) => {
      const match = lotto.compare(winningNumbers, bonusNumber);
      this.#result[match] += 1;
    });

    const totalPrize = this.getTotalPrize(this.#result);
    this.#profitRatio = this.caculateProfitRatio(this.#money, totalPrize);
    this.printResult();
  }

  printResult() {
    Console.print(RESULT_MEESAGE.lottoResult);
    Console.print(
      RESULT_MEESAGE.match3.replace("N", this.#result[3]) +
        NEW_LINE +
        RESULT_MEESAGE.match4.replace("N", this.#result[4]) +
        NEW_LINE +
        RESULT_MEESAGE.match5.replace("N", this.#result[5]) +
        NEW_LINE +
        RESULT_MEESAGE.match5andBonus.replace("N", this.#result[5.5]) +
        NEW_LINE +
        RESULT_MEESAGE.match6.replace("N", this.#result[6])
    );
    Console.print(RESULT_MEESAGE.profit.replace("N", this.#profitRatio));
    Console.close();
  }

  getTotalPrize(result) {
    return Object.entries(result).reduce(
      (total, [match, prize]) =>
        PRIZE_MONEY[match]
          ? (total += PRIZE_MONEY[match] * prize)
          : (total += 0),
      0
    );
  }

  caculateProfitRatio(money, totalPrize) {
    return (Math.round((totalPrize / money) * 1000) / 10).toFixed(1);
  }
}

new App().play();

module.exports = App;
