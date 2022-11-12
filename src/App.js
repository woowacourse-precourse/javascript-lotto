const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  async play() {
    try {
      let money = await this.getInputMoney();
      Console.print("\n");
      Console.print(`${money / 1000}개를 구매했습니다.`);
      let Lottos = this.publishLotto(money / 1000);
      this.printLottosNumbers(Lottos);
      Console.print("\n");
      let winNumbers = await this.getWinNumbers();
      Console.print("\n");
      let bonusNumbers = await this.getBonusNumber();
      if (winNumbers.has(bonusNumbers)) {
        throw new Error("[ERROR]");
      }
    } catch (e) {}
  }

  getInputMoney() {
    return new Promise((resolve, reject) => {
      Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
        if (!this.isValidMoney(input)) {
          reject(() => {
            throw new Error("[ERROR]유효하지 않은값");
          });
        } else resolve(input);
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

  printLottosNumbers(Lottos) {
    Lottos.forEach((e) => {
      Console.print(e.getNumbers());
    });
  }

  isValidWinNumbers(winNumbers) {
    if (winNumbers.size != 6) return false;
    if (winNumbers.has(NaN)) return false;
    if ([...winNumbers].filter((e) => e < 1 || e > 45).length == 0) return true;
    else return false;
  }

  getWinNumbers() {
    return new Promise((resolve, reject) => {
      Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
        let winNumbers = new Set(input.split(",").map(Number));
        if (this.isValidWinNumbers(winNumbers)) {
          resolve(winNumbers);
        } else {
          reject(() => {
            throw new Error("[ERROR]유효하지 않은값");
          });
        }
      });
    });
  }
}

module.exports = App;
