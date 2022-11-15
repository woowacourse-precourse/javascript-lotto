const { MESSAGE, RANK_MESSAGE } = require("./constants/constants");
const Lotto = require("../src/Lotto");
const Money = require("../src/Money");
const Bonus = require("../src/Bonus");
const { Console } = require("@woowacourse/mission-utils");
const createRandomNumbers = require("./utils/createRandomNumbers");
const calcCount = require("./utils/calcCount");
const calcResult = require("./utils/calcResult");
const calcRevenueRate = require("./utils/calcRevenueRate");
const calcRevenue = require("./utils/calcRevenue");

class App {
  #money;
  #count;
  #randomNumbers;
  #lottoNumbers;
  #bonus;
  #resultArr;
  #revenue;
  #revenueRate;
  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#bonus = 0;
    this.#revenue = 0;
    this.#revenueRate = 0;
    this.#randomNumbers = [];
    this.#resultArr = [];
    this.#lottoNumbers = "";
  }
  play() {
    this.buyLotto();
  }
  buyLotto() {
    Console.readLine(MESSAGE.MONEY_INPUT, (userInput) => {
      const inputMoney = new Money(Number(userInput));
      this.#money = inputMoney.getMoney();
      Console.print("");
      this.#count = calcCount(this.#money);
      Console.print(MESSAGE.LOTTO_AMOUNT(this.#count));
      this.#randomNumbers = createRandomNumbers(this.#count);
      this.pritnRandomNumber();
    });
  }
  pritnRandomNumber() {
    this.#randomNumbers.forEach((element) => {
      Console.print(`[${element.join(", ")}]`);
    });
    Console.print("");
    this.getLottoNumber();
  }
  getLottoNumber() {
    Console.readLine(MESSAGE.LOTTO_NUMBER_INPUT, (userInput) => {
      const splitedInput = userInput.split(",");
      splitedInput.forEach((e, idx) => (splitedInput[idx] = Number(e)));
      const lotto = new Lotto(splitedInput);
      this.#lottoNumbers = lotto.getNumbers();
      Console.print("");
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER_INPUT, (userInput) => {
      const bonus = new Bonus(this.#lottoNumbers, parseInt(userInput));
      this.#bonus = bonus.getBonus();
      Console.print("");
      this.getResult();
    });
  }
  getResult() {
    this.#resultArr = calcResult(
      this.#randomNumbers,
      this.#lottoNumbers,
      this.#bonus
    );
    this.getRevenue();
  }
  getRevenue() {
    this.#revenue = calcRevenue(this.#resultArr);
    this.printResult();
  }
  printResult() {
    Console.print(MESSAGE.RESULT);
    Console.print(MESSAGE.LINE_STROKE);
    this.printRank();
    this.#revenueRate = calcRevenueRate(this.#revenue, this.#money);
    Console.print(RANK_MESSAGE.REVENUE_RATE(this.#revenueRate));
    Console.close("");
  }
  printRank() {
    for (let rank = 5; rank >= 1; rank -= 1) {
      const myRankData = this.#resultArr[rank];
      Console.print(RANK_MESSAGE[rank](myRankData));
    }
    return;
  }
}
const app = new App();
app.play();
module.exports = App;
