const { Console, Random } = require("@woowacourse/mission-utils/");
class App {
  play() {
    this.getInputMoney();
  }

  getInputMoney() {
    Console.readline(question, (input) => {
      if (!this.isValidInput(input)) {
        throw new Error("유효하지 않은 값");
      }
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
