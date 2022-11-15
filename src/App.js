const { MESSAGE } = require("./constants/constants");
const Lotto = require("../src/Lotto");
const Money = require("../src/Money");
const Bonus = require("../src/Bonus");
const { Console } = require("@woowacourse/mission-utils");
const createRandomNumbers = require("./utils/createRandomNumbers");
const calcCount = require("./utils/calcCount");

class App {
  #money;
  #count;
  #randomNumbers;
  #lottoNumbers;
  #bonus;
  constructor() {
    this.#money = 0;
    this.#count = 0;
    this.#bonus = 0;
    this.#randomNumbers = [];
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
      Console.print(element);
    });
    Console.print("");
    this.getLottoNumber();
  }
  getLottoNumber() {
    Console.readLine(MESSAGE.LOTTO_NUMBER_INPUT, (userInput) => {
      const splitedInput = userInput.split(",");
      splitedInput.forEach((e, idx) => (splitedInput[idx] = Number(e)));
      console.log(splitedInput);
      const lotto = new Lotto(splitedInput);
      this.#lottoNumbers = lotto.getNumbers();
      Console.print(this.#lottoNumbers);
      Console.print("");
      this.getBonusNumber();
    });
  }
  getBonusNumber() {
    Console.readLine(MESSAGE.BONUS_NUMBER_INPUT, (userInput) => {
      const bonus = new Bonus(this.#lottoNumbers, parseInt(userInput));
      this.#bonus = bonus.getBonus();
      console.log(this.#bonus);
      Console.print("");
      Console.close();
    });
  }
}
const app = new App();
app.play();
module.exports = App;
