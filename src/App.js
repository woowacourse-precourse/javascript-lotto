const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  winNumbers;
  bonusNumber;
  lottos;
  scores;
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
        Console.print(`\n${input / 1000}개를 구매했습니다.`);
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
    Console.readLine("\n당첨 번호를 입력해 주세요.\n", (input) => {
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
    Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
      if (!this.isValidBonusNumber(input)) {
        throw "[ERROR]";
      } else {
        this.bonusNumber = input;
        this.matchLottos(this.lottos, this.winNumbers, this.bonusNumber);
        this.printScore();
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
    Console.print("\n당첨 통계\n---\n");
    this.rewards.forEach((reward) => {
      reward[0] != 5.5
        ? Console.print(
            `${reward[0]}개 일치 (${reward[1].toLocaleString()}원) - ${
              reward[2]
            }개`
          )
        : Console.print(
            `${Math.floor(
              reward[0]
            )}개 일치, 보너스 볼 일치 (${reward[1].toLocaleString()}원) - ${
              reward[2]
            }개`
          );
    });
    Console.print(`총 수익률은 ${this.calculateProfit()}%입니다.`);
    Console.print("```\n\n---");
  }

  calculateProfit() {
    const sum = this.rewards.reduce((total, arg) => {
      if (arg[2] != 0) {
        return (total += arg[1] * arg[2]);
      }
      return total;
    }, 0);
    return Math.round((sum / this.payMoney) * 10000) / 100;
  }
}

module.exports = App;
