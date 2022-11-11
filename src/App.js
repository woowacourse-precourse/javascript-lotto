const { Console, Random } = require("@woowacourse/mission-utils/");
class App {
  lottoCount;

  constructor() {
    this.lottoCount = 0;
  }

  play() {
    this.getInputMoney().then((input) => {
      this.lottoCount = this.getLottoCount(input);
    });
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

  getLottoCount(input) {
    return input / 1000;
  }

  setLottoCount(count) {
    this.lottoCount = count;
  }

  showLottoCount() {
    Console.print("발행된 로또", this.lottoCount);
  }
}

module.exports = App;
