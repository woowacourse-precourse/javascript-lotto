const { Console, Random } = require("@woowacourse/mission-utils/");
const Lotto = require("../src/Lotto");
class App {
  lottoCount;

  constructor() {
    this.lottoCount = 0;
  }

  async play() {
    try {
      let input = await this.getInputMoney();

      Console.print(`${input / 1000}개를 구매했습니다.`);

      let Lottos = this.publishLotto(input / 1000);

      this.printLottosNumbers(Lottos);
    } catch (e) {}
  }

  getInputMoney() {
    return new Promise((resolve, reject) => {
      Console.readLine("구매금액을 입력해 주세요.\n", (input) => {
        if (!this.isValidInput(input)) {
          reject(() => {
            throw new Error("[ERROR]유효하지 않은값");
          });
        } else resolve(input);
      });
    });
  }

  isValidInput(input) {
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
}

module.exports = App;
