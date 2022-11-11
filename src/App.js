const { Console, Random } = require("@woowacourse/mission-utils/");
class App {
  #lottoCount;

  constructor() {
    this.#lottoCount = 0;
  }

  play() {
    this.getInputMoney();
  }

  getInputMoney() {
    Console.readline(question, (input) => {
      if (!this.isValidInput(input)) {
        throw new Error("유효하지 않은 값");
      }
      this.setLottoCount.bind(this.getLottoCount(input));
    });
  }

  isValidInput(input) {
    if (input % 1000 != 0) return false;
    if (input === "") return false;
    if (/[\D]/.test(input)) return false;
    else return true;
  }

  getLottoCount = (input) => {
    return input / 1000;
  };

  setLottoCount(count) {
    this.#lottoCount = count;
  }
}

module.exports = App;
