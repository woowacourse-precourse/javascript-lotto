const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
const Calculator = require("../src/Calculator");
const Printer = require("./Printer");

class App {
  payMoney;
  winNumbers;
  bonusNumber;
  lottos;
  reward;
  revenue;
  printer;
  calculator;

  constructor() {
    this.payMoney = 0;
    this.winNumbers = [];

    this.bonusNumber = 0;

    this.lottos = [];

    this.rewards = [
      [3, 5_000, 0], // [번호 일치 개수, 당첨 금액, 당첨 개수]
      [4, 50_000, 0],
      [5, 1_500_000, 0],
      [5.5, 30_000_000, 0], // [5.5 = "5개 일치, 보너스 번호 일치"]
      [6, 2_000_000_000, 0],
    ];
    this.revenue = 0;
    this.printer = new Printer();
    this.calculator = new Calculator();
  }

  play() {
    this.getInputMoney();
  }

  getInputMoney() {
    Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
      if (!this.isValidMoney(input)) {
        throw "[ERROR]";
      }
      this.payMoney = input;
      this.printer.printMoney(this.payMoney);
      this.lottos = this.publishLottos(input / 1000);
      this.printer.printLottosNumbers(this.lottos);
      this.getWinNumbers();
    });
  }

  isValidMoney(input) {
    if (input === "") return false;
    if (/[\D]/.test(input)) return false;
    if (input % 1000 != 0) return false;
    return true;
  }

  publishLottos(count) {
    return new Array(count)
      .fill(undefined)
      .map((e) => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  getWinNumbers() {
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
      if (!this.isValidWinNumbers(input)) {
        throw "[ERROR]";
      }
      this.winNumbers = input.split(",").map(Number);
      this.getBonusNumber();
    });
  }

  isValidWinNumbers(input) {
    let numbers = input.split(",").map(Number); //문자열을 콤마로 나누고, 나눈 원소들을 String->Number로 변환
    if (new Set(numbers).size != 6) return false;
    if (numbers.includes(NaN)) return false;
    if (numbers.filter((e) => e < 1 || e > 45).length != 0) return false;
    else return true;
  }

  getBonusNumber() {
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      if (!this.isValidBonusNumber(input)) {
        throw "[ERROR]";
      }
      this.bonusNumber = input;
      this.matchLottos(this.lottos, this.winNumbers, this.bonusNumber);
      this.printer.printScore(this.rewards);
      this.revenue = this.calculator.conductRevenue(
        this.rewards,
        this.payMoney
      );
      this.printer.printRevenue(this.revenue);
      this.gameOver();
    });
  }

  isValidBonusNumber(input) {
    return Number(input) >= 1 && Number(input) <= 45;
  }

  matchLottos(lottos, winNumbers, bonusNumber) {
    lottos
      .filter((lotto) => lotto.compareNumbers(winNumbers, bonusNumber) >= 3)
      .map((lotto) => lotto.compareNumbers(winNumbers, bonusNumber))
      .forEach((score) => {
        this.rewards.forEach((reward) => {
          if (score == reward[0]) reward[2] += 1;
        });
      });
  }
  gameOver() {
    Console.close();
  }
}

module.exports = App;
