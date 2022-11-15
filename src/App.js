const { MESSAGE } = require("./constants/constants");
const Money = require("../src/Money");
const { Console, Random } = require("@woowacourse/mission-utils");
const createRandomNumbers = require("./utils/createRandomNumbers");
const calcCount = require("./utils/calcCount");

class App {
  #money;
  #count;
  #randomNumbers;
  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#randomNumbers = [];
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
      Console.close();
    });
  }
  pritnRandomNumber() {
    this.#randomNumbers.forEach((element) => {
      Console.print(element);
    });
    Console.print("");
    // this.getLottoNumber();
  }
  play() {
    this.buyLotto();
  }
}
const app = new App();
app.play();
module.exports = App;
