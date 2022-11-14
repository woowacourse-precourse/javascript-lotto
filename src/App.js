const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  winNumbers;
  bonusNumber;
  lottos;
  scores;
  profit;
  payMoney;
  reward;

  constructor() {
    this.bonusNumber = 0;

    this.winNumbers = [];

    this.lottos = [];

    this.scores = new Map();
    this.scores.set("3개 일치", 0);
    this.scores.set("4개 일치", 0);
    this.scores.set("5개 일치", 0);
    this.scores.set("5개 일치, 보너스 볼 일치", 0);
    this.scores.set("6개 일치", 0);

    this.profit = 0;

    this.payMoney = 0;

    this.reward = [5_000, 50_000, 1_500_000, 30_000_000, 2_000_000_000];
  }

  play() {
    this.getInputMoney();
  }

  getInputMoney() {
    Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
      if (!this.isValidMoney(input)) {
        throw "[ERROR]";
      } else {
        this.payMoney = input;
        Console.print(`${input / 1000}개를 구매했습니다.`);
        this.lottos = this.publishLotto(input / 1000);
        this.printLottosNumbers();
        this.getWinNumbers();
      }
    });
  }

  isValidMoney(input) {
    if (input % 1000 != 0) return false;
    if (input === "") return false;
    if (/[\D]/.test(input)) return false;
    return true;
  }

  publishLotto(count) {
    return new Array(count)
      .fill(undefined)
      .map((e) => new Lotto(Random.pickUniqueNumbersInRange(1, 45, 6)));
  }

  printLottosNumbers() {
    this.lottos.forEach((e) => {
      Console.print(`[${e.getNumbers().join(", ")}]`);
    });
  }

  isValidWinNumbers(winNumbers) {
    if (winNumbers.size != 6) return false;
    if (winNumbers.has(NaN)) return false;
    if ([...winNumbers].filter((e) => e < 1 || e > 45).length != 0)
      return false;
    else return true;
  }

  getWinNumbers() {
    Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
      let wins = new Set(input.split(",").map(Number));
      if (!this.isValidWinNumbers(wins)) {
        throw "[ERROR]";
      } else {
        this.winNumbers = wins;
        this.getBonusNumber();
      }
    });
  }

  isValidBonusNumber(input) {
    return Number(input) >= 1 && Number(input) <= 45;
  }

  getBonusNumber() {
    Console.readLine("번호를 입력해 주세요.\n", (input) => {
      if (!this.isValidBonusNumber(input)) {
        throw "[ERROR]";
      } else {
        this.bonusNumber = input;
        this.matchLottos(this.lottos, this.winNumbers, this.bonusNumber);
      }
    });
  }

  matchLottos(lottos, winNumbers, bonusNumber) {
    lottos
      .filter((lotto) => lotto.matchNumbers(winNumbers, bonusNumber) >= 3)
      .map((e) =>
        e.matchNumbers(winNumbers, bonusNumber) === 5.5
          ? "5개 일치, 보너스 볼 일치"
          : String(`${e.matchNumbers(winNumbers, bonusNumber)}개 일치`)
      )
      .forEach((e) => {
        this.scores.set(String(`${e}`), this.scores.get(String(`${e}`)) + 1);
      });
  }

  calculateProfit(scores) {
    return scores.reduce((total, arg) => {
      if (arg === 3) return (total += 5_000);
      if (arg === 4) return (total += 50_000);
      if (arg === 5) return (total += 1_500_000);
      if (arg === 5.5) return (total += 30_000_000);
      if (arg === 6) return (total += 2_000_000_000);
    }, 0);
  }
}

module.exports = App;
