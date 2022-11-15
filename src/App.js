const { MESSAGE } = require("./constants/constants");
const Lotto = require("../src/Lotto");
const Money = require("../src/Money");
const { Console } = require("@woowacourse/mission-utils");
const createRandomNumbers = require("./utils/createRandomNumbers");
const calcCount = require("./utils/calcCount");

class App {
  #money;
  #count;
  #randomNumbers;
  #lottoNumbers;
  constructor() {
    this.#money = 0;
    this.#count = 0;
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
      const realInput = userInput.split(",");
      realInput.forEach((e, idx) => (realInput[idx] = Number(e)));
      console.log(realInput);
      const lotto = new Lotto(realInput);
      this.#lottoNumbers = lotto.getNumbers();
      Console.print(this.#lottoNumbers);
      Console.print("");
      Console.close();
      // this.getBonusNumber();
    });
  }
}
const app = new App();
app.play();
module.exports = App;
