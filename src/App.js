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

    this.rewards = [
      [3, 5_000, 0],
      [4, 50_000, 0],
      [5, 1_500_000, 0],
      [5.5, 30_000_000, 0],
      [6, 2_000_000_000, 0],
    ];

    this.profit = 0;

    this.payMoney = 0;
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
      .map((lotto) => lotto.matchNumbers(winNumbers, bonusNumber))
      .forEach((score) => {
        this.rewards.forEach((reward) => {
          if (score == reward[0]) reward[2] += 1;
        });
      });
  }

  printScore() {
    let idx = 0;
    console.log(this.scores);
    this.scores.forEach((value, key) => {
      Console.print(`${key} (${this.reward[idx]}원) - ${value}개`);
      idx += 1;
    });
  }

  calculateProfit(scores) {
    return scores.reduce((total, arg) => {
      if (arg === 3) return (total += this.reward[0]);
      if (arg === 4) return (total += this.reward[1]);
      if (arg === 5) return (total += this.reward[2]);
      if (arg === 5.5) return (total += this.reward[3]);
      if (arg === 6) return (total += this.reward[4]);
    }, 0);
  }
}

module.exports = App;
