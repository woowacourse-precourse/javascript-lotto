const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  play() {
    this.getInputMoney();
  }

  getInputMoney() {
    Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
      if (!this.isValidMoney(input)) {
        throw "[ERROR]";
      } else {
        Console.print(`${input / 1000}개를 구매했습니다.`);
        let Lottos = this.publishLotto(input / 1000);
        this.printLottosNumbers(Lottos);
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

  printLottosNumbers(Lottos) {
    Lottos.forEach((e) => {
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
      let winNumbers = new Set(input.split(",").map(Number));
      if (!this.isValidWinNumbers(winNumbers)) {
        throw "[ERROR]";
      } else {
        this.getBonusNumber();
      }
    });
  }

  isValidBonusNumber(input) {
    return Number(input) >= 1 && Number(input) <= 45;
  }

  getBonusNumber() {
    Console.readLine(" 번호를 입력해 주세요.\n", (input) => {
      if (!this.isValidBonusNumber(input)) {
        throw "[ERROR]";
      } else {
      }
    });
  }
}

module.exports = App;
