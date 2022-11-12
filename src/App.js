const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  lottoCount;

  constructor() {
    this.lottoCount = 0;
  }

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
    else return true;
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
    winNumbers.forEach((number) => {
      if (/[\D]/.test(number)) {
        return false;
      }
      if (number == "") {
        return false;
      } else if (Number(number) < 1 || Number(number) > 45) {
        return false;
      }
    });
    return true;
  }

  getWinNumbers() {
    return new Promise((resolve, reject) => {
      Console.readLine("당첨 번호를 입력해 주세요.\n", (input) => {
        let winNumbers = new Set(input.split(","));
        if (!this.isValidWinNumbers(winNumbers)) {
          reject(() => {
            throw new Error("[ERROR]유효하지 않은값");
          });
        } else {
          resolve(winNumbers);
        }
      });
    });
  }
}

module.exports = App;
