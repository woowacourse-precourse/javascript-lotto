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
    } catch (e) {}
  }

  getInputMoney() {
    return new Promise((resolve, reject) => {
      Console.readLine("입력 : ", (input) => {
        if (!this.isValidInput(input)) {
          reject(() => {
            throw new Error("유효하지 않은값");
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
}

module.exports = App;
