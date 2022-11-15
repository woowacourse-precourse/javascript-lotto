const { MESSAGE, REWARDS } = require("./constants/constants");
const Lotto = require("../src/Lotto");
const Money = require("../src/Money");
const Bonus = require("../src/Bonus");
const { Console } = require("@woowacourse/mission-utils");
const createRandomNumbers = require("./utils/createRandomNumbers");
const calcCount = require("./utils/calcCount");
const calcResult = require("./utils/calcResult");
const calcRevenue = require("./utils/calcRevenue");

class App {
  #money;
  #count;
  #randomNumbers;
  #lottoNumbers;
  #bonus;
  #resultArr;
  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#bonus = 0;
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
      Console.print(`${this.#count}개를 구매했습니다.`);
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
    this.calculateMoney();
  }
  calculateMoney() {
    let price = 0;
    for (let i = 0; i < 6; i++) {
      price += REWARDS[i] * this.#resultArr[i];
    }
    Console.print("당첨 통계");
    Console.print("---");
    this.printMessage();
    this.printResult(price);
  }
}
const app = new App();
app.play();
module.exports = App;
