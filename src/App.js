const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  async play() {
    try {
      let money, winNumbers, bonusNumber;
      money = await this.getInputMoney();
      let Lottos = this.publishLotto(money / 1000);
      this.printLottos(money, Lottos);
      winNumbers = await this.getWinNumbers();
      bonusNumber = await this.getBonusNumber();
      matchLotto(winNumbers, bonusNumber);
    } catch (error) {
      throw new Error(error);
    }
  }

  getInputMoney() {
    return new Promise((resolve, reject) => {
      Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
        if (this.isValidMoney(input)) {
          resolve(input);
        } else {
          reject("[ERROR]");
        }
      });
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

  printLottos(money, Lottos) {
    Console.print(`\n${money / 1000}개를 구매했습니다.`);
    Lottos.forEach((e) => {
      Console.print(e.getNumbers());
    });
    Console.print("\n");
  }

  isValidWinNumbers(winNumbers) {
    if (winNumbers.size != 6) return false;
    if (winNumbers.has(NaN)) return false;
    if ([...winNumbers].filter((e) => e < 1 || e > 45).length != 0)
      return false;
    else return true;
  }

  getWinNumbers() {
    return new Promise((resolve, reject) => {
      Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
        let winNumbers = new Set(input.split(",").map(Number));
        if (this.isValidWinNumbers(winNumbers)) {
          resolve(winNumbers);
        } else {
          reject("[ERROR]");
        }
      });
    });
  }

  isValidBonusNumber(input) {
    return Number(input) >= 1 && Number(input) <= 45;
  }

  getBonusNumber() {
    return new Promise((resolve, reject) => {
      Console.readLine("\n보너스 번호를 입력해 주세요.\n", (input) => {
        if (this.isValidBonusNumber(input)) {
          resolve(input);
        } else {
          reject("[ERROR]");
        }
      });
    });
  }
}

module.exports = App;
