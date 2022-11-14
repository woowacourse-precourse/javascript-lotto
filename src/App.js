const isThousand = require("../src/utils/isThousand.js");
const { Console, Random } = MissionUtils;
class App {
  #money;
  constructor() {
    this.#money = 0;
  }
  printInputMoney() {
    Console.print("구입금액을 입력해 주세요.");
  }
  inputMoney() {
    Console.readLine((input) => {
      if (!isThousand(input))
        throw new Error("[ERROR] 금액은 1000원으로 나누어 떨어져야 합니다.");
      this.#money = input;
    });
  }
  play() {}
}

module.exports = App;
