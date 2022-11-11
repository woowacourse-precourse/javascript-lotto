const Console = require("./Console");
const Lotto = require("./Lotto");

class App {
  constructor() {
    this.money = null;
  }

  getUserQuantityOfLotto() {
    Console.askUserInput(Console.ASK_BUY_LOTTO_AMOUNT, (input) => {
      if (/[^0-9]/g.test(input))
        throw new Error("[ERROR] 구입금액에 문자가 포함되어 있습니다.");
      if (Number(input) % 1000 !== 0)
        throw new Error("[ERROR] 1000원 단위의 금액을 입력하세요.");
      this.money = Number(input);
    });
  }

  play() {
    this.getUserQuantityOfLotto();
  }
}

const app = new App();
app.play();

module.exports = App;
