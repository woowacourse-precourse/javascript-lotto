const { Console, Random } = require("@woowacourse/mission-utils/");
class App {
  lottoCount;

  constructor() {
    this.lottoCount = 0;
  }

  async play() {
    try {
      let input = await this.getInputMoney();
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
}

module.exports = App;
