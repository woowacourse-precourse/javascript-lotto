const MissionUtils = require("@woowacourse/mission-utils");

const { Console, Random } = MissionUtils;
const returnCount = require("../src/utils/returnCount.js");
const getResult = require("../src/utils/getResult.js");
const Lotto = require("../src/Lotto");
const Bonus = require("../src/Bonus");
const Money = require("../src/Money");
const calcRevenue = require("./utils/calcRevenue.js");
const results = [0, 0, 0, 0, 0, 0];
const REWARDS = [0, 5000, 50000, 1500000, 30000000, 2000000000];
class App {
  #money;
  #cnt;
  #randomNumbers;
  #bonus;
  #numbers;
  constructor() {
    this.#money = 0;
    this.#bonus = 0;
    this.#cnt = 0;
    this.#randomNumbers = [];
    this.#numbers = "";
  }
  printMessage() {
    Console.print(`3개 일치 (5,000원) - ${results[1]}개`);
    Console.print(`4개 일치 (50,000원) - ${results[2]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${results[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results[4]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${results[5]}개`);
  }
  printResult(price) {
    const revenue = calcRevenue(price, this.#money);
    Console.print(`총 수익률은 ${revenue}%입니다.`);
    Console.close("");
  }
  calculateMoney() {
    let price = 0;
    for (let i = 0; i < 6; i++) {
      price += REWARDS[i] * results[i];
    }
    Console.print("당첨 통계");
    Console.print("---");
    this.printMessage();
    this.printResult(price);
  }
  countSameNumber() {
    this.#randomNumbers.forEach((numberArray) => {
      let result = getResult(numberArray, this.#bonus, this.#numbers);
      results[result] += 1;
    });
    this.calculateMoney();
  }

  getBonusNumber() {
    Console.readLine("보너스 번호를 입력해 주세요.\n", (input) => {
      const bonusNum = new Bonus(this.#numbers, parseInt(input));
      this.#bonus = bonusNum.getBonus();
      Console.print("");
      this.countSameNumber();
    });
  }
  getLottoNumber() {
    Console.readLine("당첨 번호를 입력해주세요.\n", (input) => {
      const realInput = input.split(",");
      realInput.forEach((e, idx) => (realInput[idx] = Number(e)));
      const lotto = new Lotto(realInput);
      this.#numbers = lotto.getNumbers();
      Console.print("");
      this.getBonusNumber();
    });
  }
  printNumbers() {
    this.#randomNumbers.forEach((element) => {
      Console.print(`[${element.join(", ")}]`);
    });
    Console.print("");
    this.getLottoNumber();
  }

  makeRandomNumbers() {
    console.log(this.#cnt);
    for (let i = 0; i < this.#cnt; i++) {
      let arr = Random.pickUniqueNumbersInRange(1, 45, 6);
      arr = arr.sort((a, b) => a - b);
      this.#randomNumbers.push(arr);
    }
    this.printNumbers();
  }
  getMoney() {
    Console.readLine("구입금액을 입력해 주세요.\n", (input) => {
      const inputMoney = new Money(Number(input));
      this.#money = inputMoney.getMoney();
      Console.print("");
      this.#cnt = returnCount(this.#money);
      Console.print(`${this.#cnt}개를 구매했습니다.`);
      this.makeRandomNumbers();
    });
  }
  play() {
    this.getMoney();
  }
}

module.exports = App;
